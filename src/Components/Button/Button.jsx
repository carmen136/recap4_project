import { useState } from "react"

export default function DeleteButton({ color, onDelete }) {
    const [showConfirm, setShowConfirm] = useState(false);


    function handleClick() {
        setShowConfirm(true);
    }


    function handleCancelClick() {
        setShowConfirm(false);
    }

    function handleDeleteClick() {
        onDelete(color);        // übergibt das color object zum löschen
        setShowConfirm(false);
    }



    return (
        <>
        {showConfirm ? (
            <>
            <p className="color-card-highlight">Really delete?</p>
            <button type="button" onClick={handleCancelClick}>CANCEL</button>
            <button type="button" onClick={handleDeleteClick}>DELETE</button>
            </>
        ) : (
            <button type="button" onClick={handleClick}>DELETE</button>
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