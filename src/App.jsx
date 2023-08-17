import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Project from './components/Project';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrolTop from './components/ScrolTop';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import "../src/Css/responsive.css";
import { useEffect , useState} from 'react';
import { BallTriangle } from 'react-loader-spinner';
import HashLoader from "react-spinners/HashLoader"

function App() {

  const [loading , setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    }, 3000)
  }, [])

  return (
    <div className="App">
    {
      loading ? 
      <HashLoader color='#8e09db' style={{display:"flex" , alignItems:"center" , justifyContent:"center" }} />
        :
        <>
        <BrowserRouter>
      <Navbar />
      <ScrolTop />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <ScrolTop />
      <Footer />
    </BrowserRouter>
        </>
    }
    </div>
  )
}

export default App
