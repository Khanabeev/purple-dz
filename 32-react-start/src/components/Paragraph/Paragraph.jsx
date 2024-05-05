import "./Paragraph.css";

function Paragraph({ text, type }) {
  return (
    <p
      className={`paragraph ${
        type === "secondary" ? "paragraph__secondary" : ""
      }`}
    >
      {text}
    </p>
  );
}

export default Paragraph;
