export default function AddTaskForm({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value.trim();
    if (title) {
      onAdd(title);
      e.target.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        name="title"
        placeholder="New task"
        className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600 transition"
      >
        Add
      </button>
    </form>
  );
}
