import { useEffect, useRef, useCallback } from 'react'
import Spinner from '../ui/Spinner'
import ListOfGifs from '../components/ListOfGifs'
import useGifs from '../hooks/useGifs'
import useNearScreen from '../hooks/useNearScreen'
import debounce from 'just-debounce-it'
import SearchForm from '../components/SearchForm'

const SearchResults = ({ params }) => {
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false, distance: '500px' })

  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 200
  ), [])

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [isNearScreen, debounceHandleNextPage])

  return (
    <>
      {loading
        ? <Spinner />
        : <>
          <h3 className='App-title'>{decodeURI(keyword[0].toUpperCase() + keyword.substring(1))}</h3>
          <ListOfGifs gifs={gifs} />
          </>}
      <div id='visor' ref={externalRef} />
    </>
  )
}

export default SearchResults
