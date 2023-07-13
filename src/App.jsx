import './App.css'
import React from 'react'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Team from './pages/Team/Team'
import Downloads from './pages/Downloads/Downloads'

function App() {

  const [page, setPage] = React.useState(1)
  
  return (
    <div className='container'>
      <Header page={page} setPage={setPage}/>
      {page === 1 && <Home />}
      {page === 2 && <Team />}
      {page === 3 && <Downloads />}
    </div>
  )
}

export default App
