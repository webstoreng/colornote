import React from 'react'

function Header({setDarkmode, darkmode}) {
    const handleClick = ()=>{
        setDarkmode((prevState)=>!prevState)
    }
    return (
        <div className="header">
            <h1>JOTE</h1>
            <button className="save" onClick={handleClick}>Toggle BackgroundColor</button>
        </div>
    )
}

export default Header
