import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'
import AddProfile from './components/AddProfile'
function App() {


  const [personer, setPersoner] = useState([
    {
      fornamn: "Anna",
      efternamn: "Svensson",
      alder: 25,
      hobby: "Fotboll"
    },
    {
      fornamn: "Erik",
      efternamn: "Johansson",
      alder: 30,
      hobby: "Löpning"
    },
    {
      fornamn: "Maria",
      efternamn: "Karlsson",
      alder: 28,
      hobby: "Måla"
    },
    {
      fornamn: "Lars",
      efternamn: "Nilsson",
      alder: 35,
      hobby: "Cykling"
    },
    {
      fornamn: "Emma",
      efternamn: "Andersson",
      alder: 22,
      hobby: "Läsa"
    }])

  const addPerson = (newPerson) => {
    //Lägg till x i personer-statet
    setPersoner([...personer, newPerson])
    // setPersoner(x)
  }

  return (
    <>
    <h1>React state & Props - Webb25 - Antal personer: {personer.length}</h1>
    <AddProfile addPerson={addPerson}/>
    <ul>
      {personer.map((person,i) => <Profile key={i} data={person}/>)}
    </ul>
    </>
  )
}

export default App
