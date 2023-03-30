import React, { useState } from 'react'
import IconSearch from '../ui/IconSearch'

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
    <form className='Search' onSubmit={handleSubmit}>
        <input className='Search-input' type='text' placeholder='Search a gif' onChange={handlechange} value={keyword}/>
        <button className='Search-button'><IconSearch/></button>
    </form>
    )
}

export default React.memo(SearchForm)