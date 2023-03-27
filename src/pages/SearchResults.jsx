import React      from 'react'
import Spinner    from '../ui/Spinner'
import ListOfGifs from '../components/ListOfGifs'
import useGifs    from '../hooks/useGifs'

const SearchResults = ({params}) => {

    const { keyword } = params
    const { loading, gifs} = useGifs({ keyword })
    
    return (
        <>
        {loading 
        ? <Spinner/> 
        : <>
        <h3 className='Search-title'>{decodeURI(keyword)}</h3>
        <ListOfGifs gifs={gifs}/></> 
        }
        </>
    )
}

export default SearchResults