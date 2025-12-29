"use client";
import { useState } from "react";

interface EmailProp {
  name: string;
  email: string;
  company: string;
}

export default function Email({ name, email, company }: EmailProp) {
  const [content, setContent] = useState("");

  function sendEmail(emailContent: string) {
    console.log(emailContent);
  }

  return (
    <>
      <div>
        <textarea
          placeholder="Enter your email here"
          className="border border-s-stone-500"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button
          onClick={() => {
            sendEmail(content);
          }}
          className="border border-s-stone-700"
        >
          Send
        </button>
      </div>
    </>
  );
}
