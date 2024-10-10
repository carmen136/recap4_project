import ColorForm from "../ColorForm/ColorForm";
import Color from "../Color/Color";
import "./../Color/Color.css";


export default function Theme({ currentTheme, addColor, deleteColor, editColor }) {
const color = { role: "some color", hex: "#FFFFFF", contrastText: "#000000"};

  return (
    <>
      <ColorForm defaultData={color} addColor={addColor} editColor={editColor} mode={"ADD"} />

      {currentTheme.colors.length === 0 && <p>No colors saved. Start adding one!.</p>}
      <section className="color-section">
      {currentTheme.colors.map((color) => {
        return <Color key={color.id} color={color} deleteColor={deleteColor} editColor={editColor} />;
      })}
      </section>
    </>
  );
}