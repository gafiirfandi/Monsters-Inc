import React from 'react'

import './search-box.styles.css'

export const SearchBox = ({ placeholder, handleChange }) => {
    return(
        <div>
            <input className="search" type="search" onChange={handleChange} placeholder={placeholder}/>
        </div>
    )
}

// e => this.setState({search_field: e.target.value})

