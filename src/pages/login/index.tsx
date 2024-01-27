import { GeldIcon } from "@/components/images/geldicon";
import { useRouter } from "next/router";

export default function Login() {
    const router = useRouter()
  return (
    <div style={{ display: "flex", height: "100vh", color: "black" }}>
      <div className="login-con">
        <GeldIcon />
        <div style={{ textAlign: "center", padding: "20px 0 45px 0" }}>
          <div style={{ fontSize: "30px", fontWeight: "500", padding: "15px" }}>
            Welcome Back
          </div>
          <div style={{ fontWeight: "300" }}>
            Welcome back, Please enter your details
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <input placeholder="Email" />
          <input placeholder="Password" />
          <button>Log In</button>
        </div>
        <div style={{ display: "flex", gap: "15px", padding: "30px" }}>
          <p>Dont have an account?</p>
          <p className="signup" onClick={() => router.push("/signup")}>Sign Up</p>
        </div>
      </div>
      <div style={{ backgroundColor: "#0166FF", width: "50vw" }}></div>
    </div>
  );
}
