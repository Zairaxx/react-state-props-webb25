import { useState } from "react"

const AddItem = (props) => {
    //Koppla state med input
    const [nameInput, setNameInput] = useState("");

    return(
        <div>
            <input type="text" onChange={(e) => {setNameInput(e.target.value)}} />
            <button onClick={() => {props.addToList(nameInput)}}>Add to list</button>
        </div>
    )
}

export default AddItem