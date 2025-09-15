"use client";
import { useState } from "react";

export default function Outreach() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [people, setPeople] = useState<
    { name: string; email: string; company: string }[]
  >([]);

  function addPerson() {
    setPeople([...people, { name: name, email: email, company: company }]);
    setName("");
    setEmail("");
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
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
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
            <div>{person.company}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
