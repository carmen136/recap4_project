import "./Color.css";
import DeleteButton from "../Button/Button.jsx"

export default function Color({ color, onDelete }) {
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-highlight">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <DeleteButton color={color} onDelete={onDelete} />
    </div>
  );
}


