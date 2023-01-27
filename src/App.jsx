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

function App() {

  const [loading , setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    }, 2500)
  }, [])

  return (
    <div className="App">
    {
      loading ? 
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#6665ee"
        ariaLabel="ball-triangle-loading"
        // wrapperClass=
        wrapperStyle={{margin:"19rem auto"}}
        visible={true}
      />
        :
        <>
        <BrowserRouter>
      <Navbar />
      <ScrolTop />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        {/* <Route path="/education" element={<Body />} /> */}
        <Route path="/contact" element={<Contact />} />
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
