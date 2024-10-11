import { useState, useEffect } from "react";

async function getContrastCheck(color) {
    try {
        const response = await fetch("https://www.aremycolorsaccessible.com/api/are-they",
            {
            method: "POST",
            body: JSON.stringify({ colors: [color.hex, color.contrastText] }),
            headers: {
                "Content-Type": "application/json" // Content-Type auf application/json setzen
            },
            } 
        );

    const data = await response.json();
    return data;

    } catch (error) {
        console.error("Problem mit der Fetch-Operation")
    }
}



export default function ContrastChecker({color}){
    const [result, setResult] = useState(null);

    useEffect(() => {
        const checkContrast = async () => {
            const contrastResult = await getContrastCheck(color);
            // console.log(contrastResult);
            setResult(contrastResult);
            // console.log("Result set to:", contrastResult);
        };

        checkContrast();
    }, [color]);

    return (
        <>
            {result ? (
                <p>Overall Contrast Score: {result.overall}</p>
            ) : (
                <p>Überprüfe den Kontrast...</p>
            )}
        </>
    );
}