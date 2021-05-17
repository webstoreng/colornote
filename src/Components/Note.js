import { MdDeleteForever } from 'react-icons/md'
const Note = ({note,handleDeletenote,id}) =>{
  return(
      <div className="note">
          <span>{note.text}</span>
          <div className="note-footer">
              <small>{note.date}</small>
              <MdDeleteForever className="delete" size="1.3em" onClick={()=>{handleDeletenote(id)}}/>

          </div>
      </div>
  )
}

export default Note