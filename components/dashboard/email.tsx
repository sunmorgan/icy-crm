"use client";

interface EmailProp {
  name: string;
  email: string;
  company: string;
}

export default function Email({ name, email, company }: EmailProp) {
  console.log(name, email, company);
  return (
    <>
      <div>
        <textarea
          placeholder="Enter your email here"
          className="border border-s-stone-500"
        ></textarea>
      </div>
    </>
  );
}
