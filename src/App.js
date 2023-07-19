import './App.css';
import { Routes, Route } from 'react-router-dom';


// Data for site
import { Data as data } from './data';

// Frameworks
import { useState, useEffect } from 'react';

// Components
import NavigationBar from './NavigationBar/NavigationBar.jsx';

//Pages
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ProjectDetailPage from './Pages/ProjectDetailPage/ProjectDetailPage';
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {
  let NavBar = null
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mode, setMode] = useState("light.png");

  const handleScroll = () => {
    const position = window.scrollY;
    if (position > 250) {
      NavBar.setAttribute('id','Scrolled')
    } else {
      NavBar.setAttribute('id','UnScrolled')
    }
    setScrollPosition(position);
  };

  useEffect(() => {
    NavBar = document.querySelector('.NavigationBar')
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App" onScroll={handleScroll}>
      <NavigationBar data={data.nav} mode={mode} setMode={setMode}/>
      <Routes>
        <Route path='/' element={<HomePage data={data} mode={mode} setMode={setMode}/>}></Route>
        <Route path='/:projectName' element={<ProjectDetailPage data={data.projectsSection.projects} mode={mode}/>}></Route>
        <Route path='/about' element={<AboutPage data={data.aboutPage}/>}></Route>
        <Route path='/contact' element={<ContactPage />}/>
      </Routes>
    </div>
  );
}

export default App;
