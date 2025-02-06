/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useQuery, useMutation } from "@apollo/client";
import {
  GET_USERS,
  ADD_USER,
  GET_COURSES,
  ADD_COURSE,
  GET_TEACHERS,
} from "./graphql/queries";
import { useState } from "react";

export default function Home() {
  const { data, loading, error } = useQuery(GET_USERS);
  const {
    data: coursesData,
    loading: coursesLoading,
    error: coursesError,
  } = useQuery(GET_COURSES);

  const {
    data: teachersData,
    loading: teachersLoading,
    error: teachersError,
  } = useQuery(GET_TEACHERS);
  const [addUser] = useMutation(ADD_USER);
  const [addCourse] = useMutation(ADD_COURSE, {
    update(cache, { data: { addCourse } }) {
      const existingCourses = cache.readQuery<{ getCourses: any }>({
        query: GET_COURSES,
      });

      if (existingCourses) {
        cache.writeQuery({
          query: GET_COURSES,
          data: {
            getCourses: [...existingCourses.getCourses, addCourse],
          },
        });
      }
    },
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");

  const handleAddUser = async () => {
    try {
      await addUser({ variables: { name, email } });
      setName("");
      setEmail("");
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  const handleCourse = async (event: any) => {
    try {
      event.preventDefault();
      await addCourse({ variables: { title } });
      setTitle("");
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  const handleTeacher = async (event: any) => {};

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

      <div>
        <h1 className="text-2xl font-bold mb-4 mt-8">Courses</h1>
        {coursesLoading ? (
          <p>Loading...</p>
        ) : coursesError ? (
          <p>Error: {coursesError.message}</p>
        ) : (
          <ul>
            {coursesData?.getCourses.map((course: any) => (
              <li key={course.id} className="border p-2 mb-2 rounded">
                {course.title}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <form>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="border p-2 rounded"
          />
          <button onClick={handleCourse}>Add Course</button>
        </form>
      </div>

      {/* teacher  */}

      <div>
        <h2>Teachers</h2>

        {teachersLoading ? (
          <p>Loading...</p>
        ) : teachersError ? (
          <p>Error: {teachersError.message}</p>
        ) : (
          <ul>
            {teachersData?.getTeachers.map((teacher: any) => (
              <li key={teacher.id} className="border p-2 mb-2 rounded">
                {teacher.name}
              </li>
            ))}
          </ul>
        )}

        <form>
          <input type="text" placeholder="Name" />
          <button onClick={handleTeacher}> </button>
        </form>
      </div>

      {/* new */}
    </main>
  );
}
