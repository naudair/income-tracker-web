import style from "../styles/LastRecord.module.css";
import { HouseIcon } from "./images/houseIcon";

export default function LastRecords() {
  return (
    <div className={style.lastRecord}>
      <div className={style.head}>Last Records</div>
      <div className={style.container}>
        {array.map((array) => (
          <div key={array} className={style.body}>
            <div style={{ display: "flex", gap: "15px", lineHeight: "20px" }}>
              <HouseIcon />
              <div>
                {array}
                <div style={{ color: "rgba(107, 114, 128, 1)", fontSize:"13px" }}>3 hours ago</div>
              </div>
            </div>
            <div style={{ color: "rgba(132, 204, 22, 1)" }}>-1 000₮</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const array = [
  "Lending & Renting",
  "Lending & Renting",
  "Lending & Renting",
  "Lending & Renting",
  "Lending & Renting",
];
