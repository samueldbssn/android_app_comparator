package csv;

import java.io.PrintWriter;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;

public class Neo4JCsvWriter {

    public void writeCsv(Path filename, Map<Path, HashMap<Path, Float>> distances) {
        try (PrintWriter writer = new PrintWriter(filename.toString())) {
            writer.println("source,target,weight");
            for (Path source : distances.keySet()) {
                for (Path target : distances.get(source).keySet()) {
                    writer.println(source + "," + target + "," + distances.get(source).get(target));
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
