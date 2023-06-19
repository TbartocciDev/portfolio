import './App.css';

// Data for site
import { Data as data } from './data';

// Components
import NavigationBar from './NavigationBar/NavigationBar.jsx';

function App() {
  return (
    <div className="App">
      <NavigationBar data={data.nav}/>
    </div>
  );
}

export default App;
