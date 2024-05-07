package bipartiteGraph;

import lombok.*;
import org.apache.commons.io.FileUtils;

import java.io.File;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

@Getter
@AllArgsConstructor
public class Node {
    @Setter
    private int id;
    private Path path;
    private List<String> tokens;
    @Setter
    private Integer group = null;
    @Setter
    private Node parent = null;
    @NonNull
    private List<Node> children = new ArrayList<>();

    public Node(String path) {
        this.path = Path.of(path);
        this.tokens = new ArrayList<>();
    }

    public Node(Path path) {
        this.path = path;
        this.tokens = new ArrayList<>();
    }

    public Node(Path path, List<String> tokens) {
        this.path = path;
        this.tokens = tokens;
    }

    public void addToken(String token) {
        tokens.add(token);
    }

    public void removeToken(String token) {
        tokens.remove(token);
    }

    public void removeAllTokens() {
        tokens.clear();
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Node node = (Node) obj;
        return path.equals(node.path) && tokens.equals(node.tokens);
    }

    @Override
    public int hashCode() {
        int result = path.hashCode();
        result = 31 * result + tokens.hashCode();
        return result;
    }

    public String toString() {
        return path.toString();
    }
}
