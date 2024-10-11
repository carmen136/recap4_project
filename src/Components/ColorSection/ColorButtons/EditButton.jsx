import ColorForm from "../../ThemeRepository/ColorForm/ColorForm";
import { useState } from "react";


export default function EditButton({ color, editColor }) {
    const [showEdit, setShowEdit] = useState(false);

    function handleClickEdit() {
        setShowEdit(true);
    }

    function handleClickDone() {
        setShowEdit(false);
    }

    return (
        <>
        {showEdit ? (
            <>
            <ColorForm mode={"Update"} editColor={editColor} defaultData={color} />
            <button type="button" onClick={handleClickDone}>Done!</button>
            </>
        ) : (
            <button type="button" onClick={handleClickEdit}>Edit 🖊 </button>
        )}
        </>
    );
}


// Edit Button:

// Das Form field soll nochmal erscheinen
// statt "CREATE COLOR" soll der Submit-Button "UPDATE COLOR" heißen
// es soll einen "Done!" Button geben