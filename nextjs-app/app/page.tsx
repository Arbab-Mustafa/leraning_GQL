/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useQuery, useMutation } from "@apollo/client";
import { GET_USERS, ADD_USER } from "./graphql/queries";
import { useState } from "react";

export default function Home() {
  const { data, loading, error } = useQuery(GET_USERS);
  const [addUser] = useMutation(ADD_USER);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleAddUser = async () => {
    try {
      await addUser({ variables: { name, email } });
      setName("");
      setEmail("");
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="mb-4">
        {data?.getUsers.map((user: any) => (
          <li key={user.id} className="border p-2 mb-2 rounded">
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
      <div className="space-y-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="border p-2 rounded"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border p-2 rounded"
        />
        <button
          onClick={handleAddUser}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add User
        </button>
      </div>
    </main>
  );
}
