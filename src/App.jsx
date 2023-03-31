import { useState } from 'react'
import './App.css'
import './styles/styles.scss'
import { Route, Link } from 'wouter'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import GifsContext from './context/GifsContext'
import ArrowTop from './ui/ArrowTop'
import { motion } from 'framer-motion'



function App() { 

  const [keyword, setKeyWord] = useState('morty')


  return (
      <div id='inicio' className="app">
        <section className='app__content'>
        {/* <h1>gifON</h1> */}
          <Link to='/'>
          <motion.img 
                initial={{
                  y:0,
                  scale: 0
              }}
              animate={{
                  y: 0,
                  scale: 1,
              }}
            className='app__img' src='./gifshoot_logo.svg'/>
          </Link>
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
          <ArrowTop/>
        </section>
      </div>
  )
}

export default App
