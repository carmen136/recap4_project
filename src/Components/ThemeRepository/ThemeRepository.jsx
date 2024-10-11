import ColorForm from "./ColorForm/ColorForm";
import ColorCard from "../ColorSection/ColorCard";
import "../ColorSection/ColorCard.css";


export default function ThemeRepository({ currentTheme, addColor, deleteColor, editColor }) {
const color = { role: "some color", hex: "#FFFFFF", contrastText: "#000000"};

  return (
    <>
      <ColorForm defaultData={color} addColor={addColor} editColor={editColor} mode={"Add"} />

      {currentTheme.colors.length === 0 && <p>No colors saved. Start adding one!</p>}

      <section className="color-section">
      {currentTheme.colors.map((color) => {
        return <ColorCard key={color.id} color={color} deleteColor={deleteColor} editColor={editColor} />;
      })}
      </section>
    </>
  );
}