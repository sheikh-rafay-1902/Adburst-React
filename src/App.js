import Home from './pages/Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimatedCursor from "react-animated-cursor";
import Loader from "./components/Loader/Loader";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS




function App() {

  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a timeout
    }, 1500); // Adjust the duration as needed (1500ms = 1.5 seconds)
    return () => clearTimeout(timer); // Cleanup the timeout on unmount
  }, []);

  return (
    <div>
      <Router>
    <>
      {loading ?(
        <Loader/>
      ):(
        <>
        <AnimatedCursor
          innerSize={10}
          outerSize={15}
          color="40, 10, 74"
          outerAlpha={0.5}
          innerScale={1.0}
          outerScale={3}
        />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        </>
      )} 
    </>
      </Router>
    </div>
  );
}

export default App;
