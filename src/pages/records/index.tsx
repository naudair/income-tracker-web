import Head from "@/components/headComponent";
import RecordComponent from "@/components/recordsComponent";

export default function RecordPage() {
  return (
    <div>
      <Head />
      <div
        style={{
          padding: "2.5vh 7vw",
          backgroundColor: "rgba(243, 244, 246, 1)",
          display: "flex",
          gap: "2vh",
        }}
      >
        <RecordComponent />
        <button> left</button>
      </div>
    </div>
  );
}
