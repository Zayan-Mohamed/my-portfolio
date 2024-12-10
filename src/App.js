import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import './App.scss'
import Resume from './components/Resume'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
