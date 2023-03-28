import React, { useState } from 'react'

const SearchForm = ({onSubmit}) => {
    const [keyword, setKeyword] = useState('')

    
    const handleSubmit = evt =>{
        evt.preventDefault()
        //navegar a otra ruta
        onSubmit({keyword})
    }

    const handlechange = evt => {
        setKeyword(evt.target.value)
    }


    return (
    <form className='home__form' onSubmit={handleSubmit}>
        <input className='home__input' type='text' placeholder='Search a gif' onChange={handlechange} value={keyword}/>
        <button className='home__button'>Search</button>
    </form>
    )
}

export default SearchForm