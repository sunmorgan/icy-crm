"use client";
import { useState } from "react";

export default function Outreach() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState("");

  function addPerson() {}

  return (
    <>
      <input type="text" value={name} className="bg-white" />
      <input type="text" value={email} className="bg-white" />
      <button onClick={addPerson} className="border-solid">
        Add contact
      </button>
    </>
  );
}
