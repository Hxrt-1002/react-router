import React from 'react'
import { BrowserRouter as Router , Routes , Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/contact'

const App = () => {
  return (
    <>
      <Router>
        <nav className='bg-amber-800 p-4'>
          <ul className='flex space-x-6'>
            <li>
              <Link to="/Home" className='text-white hover:text-amber-300'>Home</Link>
            </li>
            <li>
              <Link to="/About" className='text-white hover:text-amber-500'>About</Link>
            </li>
            <li>
              <Link to="/Contact" className='text-white hover:text-amber-300'>Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App