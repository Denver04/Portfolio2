import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Project from './components/Project';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter , Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        {/* <Route path="/education" element={<Body />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
      {/* <hr></hr> */}
      {/* <Body /> */}
      {/* <hr></hr> */}
      {/* <Skill /> */}
      {/* <hr></hr> */}
      {/* <Project /> */}
      {/* <hr></hr> */}
      {/* <Education /> */}
      {/* <hr></hr> */}
      {/* <Contact /> */}
      {/* <hr></hr> */}
      {/* <Achieve /> */}
    </div>
  )
}

export default App
