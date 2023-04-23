import { useState, useCallback } from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from '../components/ListOfGifs'
import useGifs from '../hooks/useGifs'
import TrendingSearches from '../components/TrendingSearches'
import SearchForm from '../components/SearchForm'

const Home = () => {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  const { loading, gifs } = useGifs()

  const handleSubmit = useCallback(({ keyword }) => {
    // navegar a otra ruta
    pushLocation(`/search/${keyword}`)
  }, [pushLocation])

  return (
    <>
      <section className='home'>
        <SearchForm onSubmit={handleSubmit} />
        <section className='home__section'>
          <section className='home__lastsearch lastsearch'>
            <h3 className='App-title'>Last search</h3>
            <ListOfGifs gifs={gifs} />
          </section>
          <TrendingSearches />
        </section>
      </section>
    </>
  )
}

export default Home
