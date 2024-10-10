import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css"

export default function ColorForm({ addColor, editColor, mode, defaultData }) {
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);        // ist eine Standardschreibweise dafür, dass aus den Eingaben des Formulars ein Objekt (hier: formData) erstellt wird
        const data = Object.fromEntries(formData);          // ist eine Standardschreibweise dafür, dass "formData" in ein JS Objekt umgewandelt wird
        
        if(mode === "ADD") {
          addColor(data);
          event.target.reset();
        } else if (mode === "UPDATE") {
          editColor(defaultData.id, data);                  // defaultData hier einsetzen!                   
          event.target.reset();
        }
    }
    

return (
    <form onSubmit={handleSubmit}>
        <label className="form__element" htmlFor="role">Role</label>
        <input className="form__element" type="text" id="role" name="role" defaultValue={defaultData.role}></input>
      <br />
      <label className="form__element" htmlFor="hex">
        Hex
        <br />
        <ColorInput id="hex" defaultValue={defaultData.hex} />
      </label>
      <br />
      <label className="form__element" htmlFor="contrastText">
        Contrast Text
        <br />
        <ColorInput id="contrastText" defaultValue={defaultData.contrastText} />
      </label>
        <button className="form__element button" type="submit">{mode} COLOR</button>
    </form>
) 

}

