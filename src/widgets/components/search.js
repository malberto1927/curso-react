import React from 'react'
import './search.css'

function Search(props) {
    return (
        <form className="Search" onSubmit={props.handleSubmit}>
            <input type="text" className="Search-input" placeholder="Busca tu video favorito" name="search"/>
        </form>
    )
}

export default Search