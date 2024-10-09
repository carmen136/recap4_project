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

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColors} />

      {colors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
