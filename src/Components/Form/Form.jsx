import ColorInput from "../ColorInput/ColorInput";
import "./Form.css"

export default function ColorForm({ onAddColor, initialData = { role: "some color", hex: "#123456", contrastText: "#FFFFFF"} }) {
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);        // ist eine Standardschreibweise dafür, dass aus den Eingaben des Formulars ein Objekt (hier: formData) erstellt wird
        const data = Object.fromEntries(formData);          // ist eine Standardschreibweise dafür, dass "formData" in ein JS Objekt umgewandelt wird
        onAddColor(data);
        console.log(data);
        event.target.reset();
    }
    

return (
    <form onSubmit={handleSubmit}>
        <label className="form__element" htmlFor="role">Role</label>
        {/* <select id="input_role" required>
            <option value="Font color" name="role">Font color</option>
            <option value="Background color" name="role">Background color</option>
            <option value="Highlight color" name="role">Highlight color</option>
            <option value="random" name="role">random</option>
        </select> */}
        <input className="form__element" type="text" id="role" name="role" defaultValue={initialData.role}></input>
      <br />
      <label className="form__element" htmlFor="hex">
        Hex
        <br />
        <ColorInput id="hex" defaultValue={initialData.hex} />
      </label>
      <br />
      <label className="form__element" htmlFor="contrastText">
        Contrast Text
        <br />
        <ColorInput id="contrastText" defaultValue={initialData.contrastText} />
      </label>
        <button className="form__element button" type="submit">ADD COLOR</button>
    </form>
) 

}



// inputs: 
// Role -> sollte ein Dropdown input sein -> select
// Hex ->  text input & color input
// Contrast Text -> text input & color input, sollte aber automatisch den Kontrast zu der Hex color anzeigen
// ADD COLOR -> submit button

// bei submit:
// alle Inputs der Form sollen ein neues Objekt im Initialcolors Array erzeugen
