import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-sky-200">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start text-stone-400">
        <ol className="font-mono list-inside list-decimal text-lg text-center sm:text-left">
          Icy
        </ol>
        <Link href="/dashboard" className="">
          Dashboard
        </Link>
      </main>
    </div>
  );
}
