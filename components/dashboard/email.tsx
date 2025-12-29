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
      <div>hello, {name}</div>
    </>
  );
}
