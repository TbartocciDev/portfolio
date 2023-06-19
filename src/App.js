import './App.css';

// Data for site
import { Data as data } from './data';

// Frameworks
import { useState, useEffect } from 'react';

// Components
import NavigationBar from './NavigationBar/NavigationBar.jsx';

//Pages
import HomePage from './HomePage/HomePage';
import WorkPage from './WorkPage/WorkPage';

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
      <HomePage />
      <WorkPage />
    </div>
  );
}

export default App;
