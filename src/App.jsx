import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr></hr>
      <Body />
      <hr></hr>
      <Project />
    </div>
  )
}

export default App
