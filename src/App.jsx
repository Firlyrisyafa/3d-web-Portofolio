import React from 'react'
import Navbar from './sections/Navbar'
import Lead from './Lead'
import About from './sections/About'
import Achievements from './sections/Achievements'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
       <Navbar />
       <Lead/>
       <About />
       <Achievements />
       <Projects />
       <Contact />
    </main>
  )
}

export default App
