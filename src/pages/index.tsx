import { GeldIcon } from "@/components/images/geldicon";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        height: "100vh",
        width: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <GeldIcon />
      </div>
      <h1 style={{color:"#"}}>WELCOME</h1>
      <div>
        <button className="homebtn" onClick={() => router.push("/login")}>
          LOGIN
        </button>
        or
        <button className="homebtn" onClick={() => router.push("/signup")}>
          SIGN UP
        </button>
      </div>
    </div>
  );
}
