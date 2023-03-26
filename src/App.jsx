import { useState } from 'react'
import './App.css'
import './styles/styles.scss'
import { Route, Link } from 'wouter'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import GifsContext from './context/GifsContext'



function App() {

  const [keyword, setKeyWord] = useState('morty')


  return (
      <div className="app">
        <section className='app__content'>
          <Link to='/'><h1>gifON</h1></Link>
          <GifsContext>
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
          </GifsContext>
        </section>
      </div>
  )
}

export default App
