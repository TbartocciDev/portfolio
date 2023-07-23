import './App.css';
import { Routes, Route } from 'react-router-dom';


// Data for site
import { Data as data } from './data';

// Frameworks
import { useState, useEffect } from 'react';

// Components
import NavigationBar from './NavigationBar/NavigationBar.jsx';
import NavBar from './NavBar/NavBar';

//Pages
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ProjectDetailPage from './Pages/ProjectDetailPage/ProjectDetailPage';
import BlogPage from './Pages/BlogPage/BlogPage';
import BlogDetailPage from './Pages/BlogDetailPage/BlogDetailPage';
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {
  // let NavBar = null
  const [scrollPosition, setScrollPosition] = useState(0);
  const [page, setPage] = useState("home");
  const [mode, setMode] = useState("light.png");
  const [subject, setSubject] = useState("hobbies");

  if (!sessionStorage.getItem('mode')) {
    console.log("does not exists")
    sessionStorage.setItem('mode', 'light')
  }

  const handleScroll = () => {
    // const position = window.scrollY;
    // if (position > 250) {
    //   NavBar.setAttribute('id','Scrolled')
    // } else {
    //   NavBar.setAttribute('id','UnScrolled')
    // }
    // setScrollPosition(position);
  };

  useEffect(() => {
    // NavBar = document.querySelector('.NavigationBar')
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App" onScroll={handleScroll}>
      {/* <NavigationBar data={data.nav} mode={mode} setMode={setMode}/> */}
      <NavBar data={data.nav} page={page}/>
      <Routes>
        <Route path='/' element={<HomePage data={data} mode={mode} setMode={setMode} setPage={setPage}/>}></Route>
        <Route path='/:projectName' element={<ProjectDetailPage data={data.projectsSection.projects} mode={mode}/>}></Route>
        <Route path='/about' element={<AboutPage data={data.aboutPage} subject={subject} setSubject={setSubject} setPage={setPage}/>}></Route>
        {/* <Route path='/blog' element={<BlogPage />}/>
        <Route path='/blog/:blogNum' element={<BlogDetailPage data={data.blogPage.blogs} />}/> */}
        <Route path='/contact' element={<ContactPage setPage={setPage}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
