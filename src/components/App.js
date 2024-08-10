import React from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <h1>Welcome to my website!</h1>
    </div>)
}


const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is a sample React Router program.</p>
    </div>)
}

const LayOut = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='about'>About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <hr />
    </div>
  )
}




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<LayOut />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
