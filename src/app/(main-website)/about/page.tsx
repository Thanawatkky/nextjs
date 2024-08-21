import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>This is about page.</h1>
      <Link style={{margin: "0 2rem 0 0 "}} href={"/"}>Home Page </Link>
      <Link href={"/content/resume"}>Resume Page </Link>
    </main>
  );
}