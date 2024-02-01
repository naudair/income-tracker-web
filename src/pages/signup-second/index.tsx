import { CashIcon } from "@/components/images/cashIcon";
import { GeldIcon } from "@/components/images/geldicon";
import Stepper2 from "@/components/stepper2Component";
import { useRouter } from "next/router";

export default function SignupSecond() {
  const router = useRouter();
  return (
    <div className="login-con" style={{ padding: "30px" }}>
      <div>
        <GeldIcon />
      </div>
      <div className="stepper">
        <Stepper2 />
      </div>
      <div style={{ display: "flex", paddingTop: "100px" }}>
        <CashIcon />
      </div>
      <p style={{ fontSize: "24px", fontWeight: "450" }}>
        Set up your cash Balance
      </p>
      <input placeholder="Email" />
      <p className="currency-text">How much cash do you have in your wallet?</p>
      <button
        style={{ width: "390px" }}
        onClick={() => router.push("/signup-final")}
      >
        Confirm
      </button>
    </div>
  );
}
