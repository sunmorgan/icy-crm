export default function Outreach() {
  function addPerson(
    name: string,
    email: string,
    company: string,
    role: string,
  ) {
    return (
      <>
        <li>{name}</li>
        <li>{email}</li>
      </>
    );
  }

  return (
    <>
      <input type="text" className="bg-white" />
      <input type="text" className="bg-white" />
    </>
  );
}
