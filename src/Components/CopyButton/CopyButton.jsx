import { useState } from "react";


export default function CopyButton( {color} ) {

    const copiedHex = color.hex;
    const [label, setLabel] = useState("COPY");

   
    async function copyHex() {
        try {
            await navigator.clipboard.writeText(copiedHex);
            setLabel("SUCCESSFULLY COPIED!")

            // Timer setzen, um Textinhalt des Buttons nach 3 sek wieder zurückzusetzen
            setTimeout(() => {
                setLabel("COPY");
            }, 3000)

        } catch (error) {
            console.error("Fehler beim Kopieren in die Zwischenablage");
        }
    }

    return (
        <button type="button" onClick={copyHex}>{label}</button>
    )
}


