import { GeldIcon } from "../../components/images/geldicon";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [required, setRequired] = useState("");

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    if (!email.includes("@")) {
      setEmailError("Please, enter your email.");
    } else {
      setEmailError("");
    }
    setEmail(event.target.value);
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    if (password.length < 8) {
      setPasswordError("Please, enter your password.");
    } else {
      setPasswordError("");
    }
    setPassword(event.target.value);
  };

  const loginUser = async (email: string, password: string) => {
    await axios
      .post("https://income-tracker-service-5w2z.onrender.com/signin", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", true.toString());
        localStorage.setItem("userId", res.data.user._id);
        router.push("/dashboard");
      })
      .catch((err) => {
        alert(err.response.data.message)
      });
  };

  const handleLogin = () => {
    if (email === "" || password === "") {
      setRequired("Please, enter your information.");
    } else {
      loginUser(email, password);
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", color: "black" }}>
      <div className="login-con" style={{ width: "50vw" }}>
        <GeldIcon />
        <div style={{ textAlign: "center", padding: "20px 0 45px 0" }}>
          <div style={{ fontSize: "30px", fontWeight: "500", padding: "15px" }}>
            Welcome Back
          </div>
          <div style={{ fontWeight: "300" }}>
            Welcome back, Please enter your details
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <input
            placeholder="Email"
            value={email}
            onChange={handleChangeEmail}
          />
          <div className="error">{emailError}</div>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
          <div className="error">{passwordError}</div>
          <button onClick={handleLogin}> Log In</button>
          <div className="error">{required}</div>
        </div>
        <div style={{ display: "flex", gap: "15px", padding: "10px" }}>
          <p>Dont have an account?</p>
          <p className="signup" onClick={() => router.push("/signup")}>
            Sign Up
          </p>
        </div>
      </div>
      <div style={{ backgroundColor: "#0166FF", width: "50vw" }}></div>
    </div>
  );
}
