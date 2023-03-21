import { useState, useEffect } from 'react'
import './App.css'
import getGifs from './services/getGifs'
import Gif from './components/Gif'
import ListOfGifs from './components/ListOfGifs'



function App() {

  const [keyword, setKeyWord] = useState('panda')


  return (
    <div className="app">
      <section className='app__content'>
        <button onClick={() => setKeyWord('lollapalooza')}>Cambiar Keyword</button>
        <ListOfGifs keyword={keyword}/>
      </section>
    </div>
  )
}

export default App
