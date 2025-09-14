"use client";
import { useState } from "react";

export default function Outreach() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState<{ name: string; email: string }[]>([]);

  function addPerson() {
    if (name.trim() && email.trim()) {
      setPeople([...people, { name: name.trim(), email: email.trim() }]);
      setName(""); // Clear the input
      setEmail(""); // Clear the input
    }
  }

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-white"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white"
      />
      <button onClick={addPerson} className="border-solid">
        Add contact
      </button>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            <div>{person.name}</div>
            <div>{person.email}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
