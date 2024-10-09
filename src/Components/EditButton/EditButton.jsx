import ColorForm from "../ColorForm/ColorForm";
import { useState } from "react";


export default function EditButton({ color, editColor }) {
    const [showEdit, setShowEdit] = useState(false);


    function handleClick() {
        setShowEdit(true);
    }


    function handleCancelClick() {
        setShowEdit(false);
    }

    return (
        <>
        {showEdit ? (
            <>
            <ColorForm mode={"UPDATE"} editColor={editColor} defaultData={color} />
            <button type="button" onClick={handleCancelClick}>CANCEL</button>
            </>
        ) : (
            <button type="button" onClick={handleClick}>EDIT</button>
        )}
        </>
    );
}




// Edit Button:

// Das Form field soll nochmal erscheinen
// statt "CREATE COLOR" soll der Submit-Button "UPDATE COLOR" heißen
// es soll einen "CANCEL" Button geben