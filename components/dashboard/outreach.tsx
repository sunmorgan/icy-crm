"use client";
import { useState } from "react";
import Email from "./email";

export default function Outreach() {
  interface Person {
    name: string;
    email: string;
    company: string;
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [people, setPeople] = useState<Person[]>([]);
  const [selected, setSelected] = useState<Person>();

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
      <div className="flex gap-x-5">
        <ul className="">
          <div className="flex gap-x-4">
            {people.map((person, index) => (
              <li key={index}>
                <div>{person.name}</div>
                <div>{person.email}</div>
                <div>{person.company}</div>
                <button onClick={() => setSelected(person)}>email</button>
              </li>
            ))}
          </div>
        </ul>

        {selected && (
          <div className="mt-8">
            <Email
              name={selected.name}
              email={selected.email}
              company={selected.company}
            />
          </div>
        )}
      </div>
    </>
  );
}
