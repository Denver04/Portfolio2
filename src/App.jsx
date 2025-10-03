import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrolTop from "./components/ScrolTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/Css/responsive.css";
import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import HashLoader from "react-spinners/HashLoader";
import moment from "moment";
import Education from "./components/Education";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);


  return (
    <div className={`App`}>
      {loading ? (
        <HashLoader
          color="#9923ddff"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      ) : (
        <>
          <BrowserRouter>
            <div className="main">
              <Navbar />
              <ScrolTop />
              <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/education" element={<Education />} />
                <Route path="/skill" element={<Skill />} />
                <Route path="/project" element={<Project />} />
              </Routes>
              <ScrolTop />
            </div>
            <Footer />
          </BrowserRouter>
        </>
      )}
    </div>
  );
}

export default App;
