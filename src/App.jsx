import { useState } from 'react'
import './App.css'
import GroceryList from './components/GroceryList'
import AddItem from './components/AddItem'

function App() {

  const [groceryList, setGroceryList] = useState(["Äpplen","Smör"])

  // Vi skapar en funktion som vi skickar som en prop till AddItem-komponenten
  const addToList = (item) => {
    

    //Skapa en kopia utav groceryList
    let updatedList = [...groceryList]
    //Lägg till item i kopia
    updatedList.push(item)
    //Ersätt nuvarande state med kopia
    setGroceryList(updatedList)

    //Alternativ 2 - Gör allting på en kodrad - Vi går igenom nästa lektion
    // setGroceryList([...groceryList, item])
  }

  return (
    <>
      <h1>React state med inputs</h1>
      <AddItem addToList={addToList} />
      <GroceryList groceryList={groceryList}/>
    </>
  )
}

export default App
