import "./Color.css";
import DeleteButton from "../DeleteButton/DeleteButton.jsx"
import EditButton from "../EditButton/EditButton.jsx";

export default function Color({ color, deleteColor, editColor }) {
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
      <DeleteButton color={color} deleteColor={deleteColor} />
      <EditButton color={color} editColor={editColor}  />
    </div>
  );
}


