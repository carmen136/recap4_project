import "./ColorCard.css";
import DeleteButton from "./ColorButtons/DeleteButton.jsx"
import EditButton from "./ColorButtons/EditButton.jsx";
import CopyButton from "./ColorButtons/CopyButton.jsx";
import ContrastChecker from "./ContrastChecker/ContrastChecker.jsx";


export default function ColorCard({ color, deleteColor, editColor }) {
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-highlight">{color.hex}</h3>
      <CopyButton color={color} />
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <ContrastChecker color={color} />
      <DeleteButton color={color} deleteColor={deleteColor} />
      <EditButton color={color} editColor={editColor}  />
    </div>
  );
}


