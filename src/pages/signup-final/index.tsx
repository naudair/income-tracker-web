import { DoneIcon } from "../../components/images/doneIcon";
import { GeldIcon } from "../../components/images/geldicon";
import Stepper3 from "../../components/stepper3component";
import { useRouter } from "next/router";

export default function SignupThird() {
  const router = useRouter();
  return (
    <div style={{ backgroundColor: "#ffffff", height: "98vh" }}>
      <div className="login-con" style={{ padding: "30px" }}>
        <div>
          <GeldIcon />
        </div>
        <div className="stepper">
          <Stepper3 />
        </div>
        <div style={{ display: "flex", paddingTop: "100px" }}>
          <DoneIcon />
        </div>
        <p
          style={{ fontSize: "24px", fontWeight: "450", marginBottom: "15px" }}
        >
          Good Job!
        </p>
        <h4 className="final-text">
          Your very first account has been created. Now continue to login
          and start tracking
        </h4>
        <button
          style={{ width: "390px" }}
          onClick={() => router.push("/login")}
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}
