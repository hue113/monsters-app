import React from 'react'
import './search-box.styles.css'

export const SearchBox = ({ searchField, onChange }) => {
    return (
            <input 
                className="search"
                type="search"
                placeholder="Search monsters here ..."
                onChange={ (e) => onChange(e)}
            />
    )
}
