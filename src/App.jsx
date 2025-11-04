import { useState } from 'react'
import './App.css'
import GroceryList from './components/GroceryList'
import AddItem from './components/AddItem'

function App() {

  const [groceryList, setGroceryList] = useState(["Äpplen","Smör"])

  const addToList = (item) => {

    console.log("Lägg till i listan");

    //Lägg till item i groceryList-state

    //Skapa en kopia utav groceryList
    let updatedList = [...groceryList]
    //Lägg till item i kopia
    updatedList.push(item)
    //Ersätt nuvarande state med kopia
    setGroceryList(updatedList)
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
