import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <h1>HOME PAGE</h1>
      <button onClick={() => router.push("/login")}>login page</button>
    </>
  );
}
