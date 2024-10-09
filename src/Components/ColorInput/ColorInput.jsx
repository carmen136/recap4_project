import { useState } from "react";


export default function ColorInput({ id, defaultValue }) {
    const [color, setColor] = useState(defaultValue);

    const handleInputChange = (event) => {
    setColor(event.target.value)
    }

    // const  handleTextChange = (event) => {
    // const newColor = event.target.value;

    // if(/^#[0-9A-F]{6}$/i.test(newColor)) {
    //     setColor(newColor);
    //     }
    // }

    return (
        <>
        <input type="text" id={id} value={color} name={id}  onChange={handleInputChange}></input>

        <input type="color" value={color} onChange={handleInputChange}></input>
        </>
    )
}


// Controlled Inputs:

// = Eingabefelder in React, bei denen der Wert des Eingabefelds durch den Zustand (State) der Komponente gesteuert wird
// -> der Wert des Eingabefelds ist immer mit dem Zustand der Komponente synchronisiert
// -> Wenn sich der Zustand ändert, wird auch der Wert des Eingabefelds aktualisiert, und umgekehrt