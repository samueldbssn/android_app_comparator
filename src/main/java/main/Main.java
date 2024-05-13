package main;

import bipartiteGraph.BipartiteGraph;
import bipartiteGraph.Edge;
import bipartiteGraph.Node;
import csv.DistancesStorer;
import csv.Neo4JCsvWriter;
import fileTree.FileTree;
import matching.DistanceComputer;
import inMemory.Indexer;
import matching.MetropolisAlgorithm;
import matching.SimilarityScoresComputer;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.List;

public class Main {

    public static void main(String[] args) {
        if(args.length != 1) {
            System.out.println("Wrong number of arguments");
            return;
        }
        String path = args[0];
        List<Path> directories = new ArrayList<>();
        try {
            directories = listDirectories(path);
            System.out.println("Directories:" + directories);
        } catch (IOException e) {
            System.out.println("Wrong path: " + path);
        }
        DistancesStorer distancesStorer = new DistancesStorer();
        for (Path path1: directories) {
            for (Path path2 : directories) {
                try {
                    Path fileName1 = path1.getFileName();
                    Path fileName2 = path2.getFileName();
                    if (distancesStorer.hasDistanceBeenAlreadyComputed(fileName1, fileName2)) {
                        continue;
                    }
                    float distance = compareTwoApks(path1, path2);
                    distancesStorer.addDistance(fileName1, fileName2, distance);
                } catch (IOException e) {
                    System.out.println("Error while comparing " + path1 + " and " + path2);
                }
            }
        }
        new Neo4JCsvWriter().writeCsv(Paths.get("distances.csv"), distancesStorer.getDistances());
    }

    private static List<Path> listDirectories(String path) throws IOException {
        try (Stream<Path> paths = Files.list(Paths.get(path))) {
            return paths.filter(Files::isDirectory).collect(Collectors.toList());
        }
    }

    private static float compareTwoApks(Path apk1, Path apk2) throws IOException {
        FileTree tree1 = FileTree.buildTree(apk1);
        FileTree tree2 = FileTree.buildTree(apk2);
        BipartiteGraph graph = BipartiteGraph.buildFromTrees(tree1, tree2);
        List<Node> graphNodes1 = graph.getNodeGroup1();
        List<Node> graphNodeGroup2 = graph.getNodeGroup2();
        Indexer indexer = new Indexer();
        indexer.addNodes(graphNodes1, 1);
        indexer.addNodes(graphNodeGroup2, 2);
        var similarityScoresComputer = new SimilarityScoresComputer(indexer);
        var similarityScores = similarityScoresComputer.computeSimilarityScores();
        graph.buildEdgesFromNeighborhoods(similarityScores);
        MetropolisAlgorithm metropolisAlgorithm = new MetropolisAlgorithm(
                graph,
                2.5,
                0.8,
                10
        );
        metropolisAlgorithm.run();
        List<Edge> matching = metropolisAlgorithm.getMatching();
        DistanceComputer distanceComputer = new DistanceComputer();
        return distanceComputer.computeDistance(graphNodes1.size(), graphNodeGroup2.size(), matching.size());
    }
}
