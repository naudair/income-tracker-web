import { GeldIcon } from "../../components/images/geldicon";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [repassword, setRepassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [repasswordError, setRepasswordError] = useState("");
  const [required, setRequired] = useState("");

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    const username = event.target.value;
    if (username.length < 4) {
      setUsernameError("Username must be more than 4 characters.");
    } else {
      setUsernameError("");
    }
    setUsername(event.target.value);
  };
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
      setPasswordError("Password must be more than 8 characters.");
    } else {
      setPasswordError("");
    }
    setPassword(event.target.value);
  };
  const handleChangeRepass = (event: React.ChangeEvent<HTMLInputElement>) => {
    const repassword = event.target.value;
    if (repassword === password) {
      setRepasswordError("");
    } else {
      setRepasswordError("Please, comfirm your password.");
    }
    setRepassword(event.target.value);
  };
  const signUpUser = async () => {
    await axios
      .post("https://income-tracker-service-5w2z.onrender.com/signup", {
        name: username,
        email: email,
        password: password,
        repassword: repassword,
      })
      .then((res) => {
        console.log(res);
        if (res.data.message === "created") router.push("/signup-first");
      })
      .catch((err) => {
        alert(err.response.data.message)
      });
  };
  const handleSignUp = () => {
    if (
      email === "" ||
      password === "" ||
      username === "" ||
      repassword === ""
    ) {
      setRequired("Please, enter your information.");
    } else {
      signUpUser();
    }
  };
  return (
    <div style={{ display: "flex", height: "100vh", color: "black" }}>
      <div className="login-con" style={{ width: "50vw" }}>
        <GeldIcon />
        <div style={{ textAlign: "center", padding: "20px 0 45px 0" }}>
          <div style={{ fontSize: "30px", fontWeight: "500", padding: "15px" }}>
            Create Geld account
          </div>
          <div style={{ fontWeight: "300" }}>
            Sign up below to create your Wallet account
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input
            placeholder="Name"
            value={username}
            onChange={handleChangeUsername}
          />
          <div className="error">{usernameError}</div>
          <input
            placeholder="Email"
            value={email}
            onChange={handleChangeEmail}
          />
          <div className="error">{emailError}</div>
          <input
            placeholder="Password"
            value={password}
            type="password"
            onChange={handleChangePassword}
          />
          <div className="error">{passwordError}</div>
          <input
            placeholder="Repassword"
            value={repassword}
            type="password"
            onChange={handleChangeRepass}
          />
          <div className="error">{repasswordError}</div>
          <button onClick={() => handleSignUp()}>Sign up</button>
          <div className="error">{required}</div>
        </div>
        <div style={{ display: "flex", gap: "15px", padding: "10px" }}>
          <p>Already have an account?</p>
          <p className="signup" onClick={() => router.push("/login")}>
            Log In
          </p>
        </div>
      </div>
      <div style={{ backgroundColor: "#0166FF", width: "50vw" }}></div>
    </div>
  );
}
