import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import UserFilter from "../components/UserFilter";

export default function UserManager() {
  const [users, setUsers] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    // Giả lập fetch API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 bg-gray-50 rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">User List</h1>
      <UserFilter filterText={filterText} onFilter={setFilterText} />
      <div className="grid grid-cols-1 gap-4">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
