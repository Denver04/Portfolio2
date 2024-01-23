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
import moment from 'moment';
import Education from './components/Education';

function App() {

  const [loading , setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    }, 3000)
  }, [])

  
  const [background, setBackground] = useState('');

  useEffect(() => {
    const updateBackground = () => {
      const currentTime = moment().format('HH:mm:ss');
      let newBackground;

      if (currentTime >= '06:00:00' && currentTime < '12:00:00') {
        newBackground = 'morning-background'; // Use your morning background class or URL
      } else if (currentTime >= '12:00:00' && currentTime < '18:00:00') {
        newBackground = 'afternoon-background'; // Use your afternoon background class or URL
      } else {
        newBackground = 'night-background'; // Use your night background class or URL
      }

      setBackground(newBackground);
    };

    // Update background on mount
    updateBackground();

    // Update background every minute
    const intervalId = setInterval(updateBackground, 60000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`App ${background}`}>
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
        <Route path="/education" element={<Education />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <ScrolTop />
      {/* <Footer /> */}
    </BrowserRouter>
        </>
    }
    </div>
  )
}

export default App
