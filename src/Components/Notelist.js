import Note from './Note'
import InputNote from './InputNote'
const Notelist = ({ notes,inputnote,setInputnote,handleAddNote,handleDeletenote}) =>{
  return(
      <div className="note-list">
          {
              notes.map(note=> <Note key={note.id} note={note} id={note.id} handleDeletenote={handleDeletenote}/>)
          }
         <InputNote
           inputnote={inputnote}
           setInputnote={setInputnote}
           handleAddNote={handleAddNote}
           />
          
      </div>
  )
}

export default Notelist 