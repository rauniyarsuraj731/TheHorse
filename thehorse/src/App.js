import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import {HomePage} from './components/HomePage/HomePage.jsx'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
    </div>
  );
}

export default App;
