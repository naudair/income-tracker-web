import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()
  return (
    <>
    hello world
    <button onClick={() => router.push("/login")}>login page</button>
    </>
  );
}
