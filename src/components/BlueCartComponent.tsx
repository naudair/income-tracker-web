import bg from "../../public/card.png";
export default function BlueCartComponent() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "384px",
        height: "216px",
        display: "flex",
        alignItems: "end",
        padding: "15px 35px ",
        boxSizing: "border-box",
        color: "#ffffff",
        fontSize: "20px",
      }}
    >
      <div style={{ lineHeight: "5px" }}>
        <p style={{ fontSize: "15px", color: "rgba(255, 255, 255, 0.5" }}>
          Cash
        </p>
        <p>1 000 000</p>
      </div>
    </div>
  );
}
