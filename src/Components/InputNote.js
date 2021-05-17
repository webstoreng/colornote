const InputNote = ({inputnote,setInputnote,handleAddNote}) =>{
    const handleChange = (e) =>{
        characterLimit - e.target.value.length >= 0 && setInputnote(e.target.value)
    }
   const handleClick = () => {
    inputnote.trim().length > 0 && handleAddNote(inputnote)
    setInputnote('')
   }
   const characterLimit = 200

    return(
        <div className="note new">
            <textarea placeholder="Type your note..." rows="8" cols="10" onChange={handleChange} value={inputnote}/>
            <div className="note-footer">
                <h5>{characterLimit-inputnote.length} Remaining</h5>
                <button className="save" onClick={handleClick}>Save</button>
            </div>
        </div>
    )
  }
  
  export default InputNote