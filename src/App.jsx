import './App.css'
import React from 'react'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Team from './pages/Team/Team'
import Downloads from './pages/Downloads/Downloads'
import { AnimatePresence } from "framer-motion"

function App() {

  const [page, setPage] = React.useState(1)
  const [darkMode, setDarkMode] = React.useState(false)

  if (darkMode) {
    document.documentElement.style.setProperty('--color-light', '#282828');
    document.documentElement.style.setProperty('--color-dark', '#ebdbb2');
    document.documentElement.style.setProperty('--filter', 'invert(10%) sepia(0%) saturate(0%) hue-rotate(247deg) brightness(101%) contrast(85%)');
  }
  else {
    document.documentElement.style.setProperty('--color-light', '#ebdbb2');
    document.documentElement.style.setProperty('--color-dark', '#282828');
    document.documentElement.style.setProperty('--filter', 'invert(93%) sepia(15%) saturate(607%) hue-rotate(341deg) brightness(94%) contrast(96%)');
  }

  return (
    <div className='container'>
      <Header page={page} setPage={setPage} darkMode={darkMode} setDarkMode={setDarkMode} />
      <AnimatePresence mode='wait'>
        {page === 1 && <Home key='home' darkMode={darkMode} />}
        {page === 2 && <Team key='team' />}
        {page === 3 && <Downloads key='downloads' />}
      </AnimatePresence>
    </div>
  )
}

export default App
