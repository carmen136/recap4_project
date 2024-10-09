import useLocalStorageState from "use-local-storage-state";
import "./App.css";
// import { useState } from "react";
import { uid } from "uid";
import { initialColors } from "./lib/colors.js";
import Color from "./Components/Color/Color.jsx";
import ColorForm from "./Components/ColorForm/ColorForm.jsx";


function App() {
  const [colors, setColors] = useLocalStorageState("colors", {defaultValue: initialColors});
  const defaultData = { role: "some color", hex: "#123456", contrastText: "#FFFFFF"};

  function handleAddColor(newColor) {
    setColors([{id: uid(), ...newColor}, ...colors])
  }

  function handleDeleteColor(colorToDelete) {                                      // B: hier könnte man auch nur die id übergeben
    setColors(colors.filter((color) => color.id !== colorToDelete.id ))
  }

  function handleEditColor(id, changedColor) {
    setColors(colors.map((color) => color.id === id ? { ...color, role: changedColor.role, hex: changedColor.hex, contrastText: changedColor.contrastText } : color ))
  }


  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm defaultData={defaultData} addColor={handleAddColor} editColor={handleEditColor} mode={"ADD"} />

      {colors.length === 0 && <p>No colors saved. Start adding one!.</p>}

      {colors.map((color) => {
        return <Color key={color.id} color={color} deleteColor={handleDeleteColor} editColor={handleEditColor} />;
      })}
    </>
  );
}

export default App;
