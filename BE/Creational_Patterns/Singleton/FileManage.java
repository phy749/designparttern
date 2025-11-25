public class FileManager {
    private static FileManager instance = new FileManager();

    private FileManager() {}

    public static FileManager getInstance() { return instance; }

    public void writeFile(String path, String content) throws IOException {
        Files.write(Paths.get(path), content.getBytes(), StandardOpenOption.APPEND);
    }
}
