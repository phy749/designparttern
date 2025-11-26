// Chỉ hiển thị thông tin user, không biết logic
export default function UserCard({ user }) {
  return (
    <div className="p-4 border rounded shadow hover:bg-gray-50 transition">
      <h2 className="text-lg font-bold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
    </div>
  );
}
