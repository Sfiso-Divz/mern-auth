import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignOut'
import Profile from './pages/Profile'

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/' element={<About />} />
      <Route path='/' element={<SignIn />} />
      <Route path='/' element={<SignOut />} />
      <Route path='/' element={<Profile />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App