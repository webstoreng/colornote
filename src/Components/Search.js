import React from 'react'
import { MdSearch } from 'react-icons/md'

function Search({setSearchInput}) {


    const handleChange = (e)=>{
        setSearchInput(e.target.value)
    }
    return (
        <div className="search">
            <MdSearch className="search-icon" size="1.3em"/>
            <input type="text" placeholder="search..." className="search-input" onChange={handleChange}/> 
            
        </div>
    )
}

export default Search
