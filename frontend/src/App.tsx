import React, { useState, useEffect } from 'react';
import Counter from '../components/Counter';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState<{ name: string, password: string }[]>([]);

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:3001/api/users');
    const data = await res.json();
    setUsers(data);
  };
  
  const addUser = async () => {
    try {
      await fetch("http://localhost:3001/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: username, password: password }),
      });
      fetchUsers(); // refresh list
    } catch (err) {
      console.error("Failed to add user:", err);
    }
  };

  const removeUser = async () => {
    try {
      const lastUser = users[users.length - 1];
      if (!lastUser) return;
      await fetch(`http://localhost:3001/api/users`, {
        method: "DELETE",
      });
      fetchUsers(); // refresh list
    } catch (err) {
      console.error("Failed to remove user:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h1>Debug Exercise</h1>

      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />

      <Counter  onAddUser={addUser} onRemoveUser={removeUser} />

      <br></br>
      <button onClick={fetchUsers}>Fetch Users</button>

      <ul>
        {users.map((u) => (
          <li key={u.name}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
