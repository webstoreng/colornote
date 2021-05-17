import React, { useState } from 'react'
import {nanoid} from 'nanoid'
import Notelist from './Components/Notelist'
import Search from './Components/Search'
import Header from './Components/Header'

function App() {
    const[darkmode, setDarkmode] = useState(false)
    const [inputnote, setInputnote]= useState('')
    const[notes, setNotes] = useState([
        {
        id:nanoid(),
        text:'Working home now',
        date:'12/3/2012',
       },
       {
        id:nanoid(),
        text:'Going for exercise in the afternoon',
        date:'15/3/2013',
       },
       {
        id:nanoid(),
        text:'Cooking for some Guest in the house',
        date:'14/3/2016',
       },
       {
        id:nanoid(),
        text:'Going to watch a movie now',
        date:'12/3/2012',
       }
])

    const addNote = (text) => {
     const date = new Date();
     const newNote = {
         id:nanoid(),
         text:text,
         date: date.toLocaleDateString()
     }
     const newNotes = [...notes, newNote]
     setNotes(newNotes)
    }
     
    const deleteNote = (id) =>{
       const noteId =   notes.filter((note)=>note.id !== id)
       setNotes(noteId)
    }
    const [searchInput, setSearchInput] = useState('')

    return (
        <div className={`${darkmode && 'dark-mode'}`}>
             <div className="container">
            <Header setDarkmode={setDarkmode} darkmode={darkmode}/>
            <Search setSearchInput={setSearchInput} searchInput={searchInput}/>
            <Notelist 
            notes={notes.filter((note)=>note.text.toLowerCase().includes(searchInput))} 
            inputnote={inputnote} 
            setInputnote={setInputnote}
            handleAddNote={addNote}
            handleDeletenote={deleteNote}/>
        </div>
        </div>
       
    )
}

export default App
