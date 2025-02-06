"use client";

import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ANIMALS, ADD_ANIMAL } from "../graphql/queries";

interface Animal {
  id: string;
  name: string;
  type: string;
}

const AnimalPage = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const { data, loading, error } = useQuery(GET_ANIMALS);
  const [addAnimal] = useMutation(ADD_ANIMAL, {
    update(cache, { data: { addAnimal } }) {
      // Read the current data from the cache
      const existingAnimals = cache.readQuery<{ getAnimals: Animal[] }>({
        query: GET_ANIMALS,
      });

      // Write the new data back to the cache
      if (existingAnimals) {
        cache.writeQuery({
          query: GET_ANIMALS,
          data: {
            getAnimals: [...existingAnimals.getAnimals, addAnimal],
          },
        });
      }
    },
  });
  const handleAnimal = async (event: any) => {
    event.preventDefault();
    try {
      await addAnimal({ variables: { name, type } });

      setName("");
      setType("");
    } catch (error) {
      console.error("Error adding animal:", error);
    }
  };

  useEffect(() => {}, []);

  return (
    <div>
      <h2>Animal</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data &&
        data.getAnimals.map((animal: Animal) => (
          <div key={animal.id}>
            <h3>{animal.name}</h3>
          </div>
        ))}
      {/*  */}

      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <button onClick={handleAnimal}>Add Animal</button>
      </form>
    </div>
  );
};

export default AnimalPage;
