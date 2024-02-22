import { WhiteGeldIcon } from "./images/white-geldIcon";

export default function BlueCart() {
  return (
    <div className="cash">
      <p>
        <WhiteGeldIcon />
      </p>
      <p
        style={{
          color: "rgba(255, 255, 255, 0.5)",
          fontSize: "16px",
          paddingTop: "45px",
          lineHeight: "0",
        }}
      >
        Cash
      </p>
      10 000 000
    </div>
  );
}
