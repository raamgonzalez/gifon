import React, { useState } from 'react'
import IconSearch from '../ui/IconSearch'
import { motion } from 'framer-motion'

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
        <motion.button
        whileTap={{scale: 0.90}}
        whileHover={{scale: 1.05, transition: "all 1s ease-in-out"}}
        onTap={{scale: 0.95}}
        className='Search-button'><IconSearch/></motion.button>
    </form>
    )
}

export default React.memo(SearchForm)