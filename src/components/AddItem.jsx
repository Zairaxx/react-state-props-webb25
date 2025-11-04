import { useState } from "react"

const AddItem = (props) => {
    //Koppla state med input
    const [nameInput, setNameInput] = useState("");

    return(
        <div>
            {/* Varje gång vi matar in något i input-fältet, uppdateras state med sitt egna value */}
            <input type="text" onChange={(e) => {setNameInput(e.target.value)}} />

            {/* Vid klick, kör addToList-funktionen som vi skickar från App.jsx */}
            <button onClick={() => {props.addToList(nameInput)}}>Add {nameInput} to list</button>
        </div>
    )
}

export default AddItem