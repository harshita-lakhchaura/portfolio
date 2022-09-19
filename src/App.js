import './App.css';

import Navbar from './components/Navbar';
import Masthead from './components/Masthead';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Masthead/>
    <About/>
    </div>
  );
}

export default App;
