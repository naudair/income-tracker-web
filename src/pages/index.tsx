import { GeldIcon } from "../components/images/geldicon";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const isUserLoggedIn = () => {
      const isUser = localStorage.getItem("user");
      if (!isUser) router.replace("/");
    };
    isUserLoggedIn();
  }, [router]);
  
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
      <h1>WELCOME</h1>
      <span style={{ color: "#0166ff" }}>Do you have an account?</span>
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
