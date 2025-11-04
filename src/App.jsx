import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'

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
    },
  {
      fornamn: "Hanna",
      efternamn: "Andersson",
      alder: 22,
      hobby: "Spela TV-spel"
  },
{
      fornamn: "Hanna",
      efternamn: "Andersson",
      alder: 22,
      hobby: "Spela TV-spel"
  }])


  return (
    <>
    <h1>React state & Props - Webb25 - Antal personer: {personer.length}</h1>
    <ul>
      {personer.map(person => <Profile data={person}/>)}
    </ul>
    </>
  )
}

export default App
