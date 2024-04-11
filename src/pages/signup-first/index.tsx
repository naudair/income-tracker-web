import { CurrencyIcon } from "../../components/images/currencyIcon";
import { GeldIcon } from "../../components/images/geldicon";
import Stepper1 from "../../components/stepper1Component";
import { currencyData } from "../../utils/data";
import { useRouter } from "next/router";

export default function SignupFirst() {
  const router = useRouter();
  return (
    <div style={{backgroundColor:"#ffffff", height:"98vh"}}>
      <div className="login-con" style={{ padding: "30px" }}>
        <div>
          <GeldIcon />
        </div>
        <div className="stepper">
          <Stepper1 />
        </div>
        <div style={{ display: "flex", paddingTop: "100px" }}>
          <CurrencyIcon />
        </div>
        <p style={{ fontSize: "24px", fontWeight: "450" }}>
          Select base currency
        </p>
        <select className="currency">
          {currencyData.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <p className="currency-text">
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one
        </p>
        <button
          style={{ width: "390px" }}
          onClick={() => router.push("/signup-second")}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
