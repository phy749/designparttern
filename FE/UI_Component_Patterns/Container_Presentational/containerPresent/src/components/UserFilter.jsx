// Nhận props onFilter để callback khi input thay đổi
export default function UserFilter({ filterText, onFilter }) {
  return (
    <input
      type="text"
      placeholder="Filter by name"
      value={filterText}
      onChange={(e) => onFilter(e.target.value)}
      className="mb-4 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
}
