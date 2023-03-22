import { useState, useEffect } from 'react'
import './App.css'
import './styles/styles.scss'
import { Route, Link } from 'wouter'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'



function App() {

  const [keyword, setKeyWord] = useState('morty')


  return (
    <div className="app">
      <section className='app__content'>
        <h1>gifON</h1>
        <Link to='/gif/panda'>Gifs de pandas</Link>
        <Link to='/gif/dog'>Gifs de dog</Link>
        <Link to='/gif/cat'>Gifs de cat</Link>
        <Route 
          component={Home}
          path='/'
          />
        <Route 
          component={SearchResults}
          path='/search/:keyword'
          />
        <Route 
          component={Detail}
          path='/gif/:id' 
          />
        {/* <ListOfGifs keyword={keyword}/> */}
      </section>
    </div>
  )
}

export default App
