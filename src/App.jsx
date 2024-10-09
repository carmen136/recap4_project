import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/Form/Form";
import "./App.css";
import { useState } from "react";
import { uid } from "uid";


function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColors(newColor) {
    setColors([{id: uid(), ...newColor}, ...colors])

  }

  function handleDeleteColors(colorToDelete) {
    setColors((colors) => colors.filter(color => color.id !== colorToDelete.id ))
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColors} />

      {colors.length === 0 && <p>No colors left. Please add new colors.</p>}

      {colors.map((color) => {
        return <Color key={color.id} color={color} onDelete={handleDeleteColors} />;
      })}
    </>
  );
}

export default App;
