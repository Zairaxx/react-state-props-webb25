import { useState } from "react"

const AddProfile = ({addPerson}) => {

    const [fornamn,setFornamn] = useState("");
    const [efternamn,setEfternamn] = useState("");
    const [alder,setAlder] = useState("");
    const [hobby,setHobby] = useState("");

    return(<>
        <input type="text" placeholder="Förnamn" onChange={(e) => {setFornamn(e.target.value)}}/>
        <input type="text" placeholder="Efternamn" onChange={(e) => {setEfternamn(e.target.value)}}/>
        <input type="number" placeholder="Ålder" onChange={(e) => {setAlder(Number(e.target.value))}}/>
        <input type="text" placeholder="Hobby" onChange={(e) => {setHobby(e.target.value)}}/>
        
        
        <button onClick={() => {

            let newPerson = {
                fornamn,
                efternamn,
                alder: alder,
                hobby:hobby
            }

            addPerson(newPerson)
            
            }}>Lägg till {fornamn}</button>
    </>)
}

export default AddProfile