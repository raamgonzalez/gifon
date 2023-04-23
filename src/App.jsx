import { useState } from 'react'
import './App.scss'
import './styles/styles.scss'
import { Route, Link } from 'wouter'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import GifsContext from './context/GifsContext'
import ArrowTop from './ui/ArrowTop'
import { motion } from 'framer-motion'
import Error404 from './pages/404'
import 'animate.css'

function App () {
  const [keyword, setKeyWord] = useState('morty')
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div id='inicio' className='App'>
      <section className='App-wrapper'>
        <Link to='/'>
          <motion.h1
            className='App-h1'
            variants={container}
            initial='hidden'
            animate='visible'
          >
            gifsh
            <motion.span variants={item} className='App-span'>o</motion.span>
            <motion.span variants={item} className='App-span'>o</motion.span>
            <motion.span variants={item} className='App-span'>o</motion.span>
            t
          </motion.h1>
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
          <Route
            component={Error404}
            path='/404'
          />
        </GifsContext>
        <ArrowTop />
      </section>
    </div>
  )
}

export default App
