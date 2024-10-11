import { useState } from "react"

export default function DeleteButton({ color, deleteColor }) {
    const [showConfirm, setShowConfirm] = useState(false);

    function handleShowConfirm() {
        setShowConfirm(true);
    }

    function handleCancelClick() {
        setShowConfirm(false);
    }

    function handleDeleteClick() {
        deleteColor(color);        // übergibt das color object zum löschen
        setShowConfirm(false);
    }

    return (
        <>
        {showConfirm ? (
            <>
            <p className="color-card-highlight">Really delete?</p>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
            <button type="button" onClick={handleDeleteClick}>Delete</button>
            </>
        ) : (
            <button type="button" onClick={handleShowConfirm}>Delete</button>
        )}
        </>
    );
}



// in der Color function:

// Delete Button -> onClick:
// > <p>Really delete?<p> 
// > Cancel-Button 
// -> reset, Anzeige nur Delete Button
// > Delete-Button
// -> onClick: Farbe wird gelöscht
// -> mit filter Funcion