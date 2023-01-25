import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Project from './components/Project';
import Skill from './components/Skill';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr></hr>
      <Body />
      <hr></hr>
      <Skill />
      <hr></hr>
      <Project />
      <hr></hr>
      <Education />
      <hr></hr>
      <Contact />
    </div>
  )
}

export default App
