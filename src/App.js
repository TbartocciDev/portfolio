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

function App() {
  let NavBar = null
  const [scrollPosition, setScrollPosition] = useState(0);

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
      <NavigationBar data={data.nav}/>
      <Routes>
        <Route path='/' element={<HomePage data={data.homePage}/>}></Route>
        <Route path='/:projectName' element={<ProjectDetailPage data={data.homePage.projectsSection.projects}/>}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
