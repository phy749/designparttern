public class ThreadPoolManager {
    private static ThreadPoolManager instance = new ThreadPoolManager();
    private ExecutorService executor = Executors.newFixedThreadPool(10);

    private ThreadPoolManager() {}

    public static ThreadPoolManager getInstance() { return instance; }

    public void submitTask(Runnable task) { executor.submit(task); }
}
