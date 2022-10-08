import logo from './logo.svg';
import './App.css';
import Header from './Components/Navbar/Header';
import Navbar from './Components/Navbar/Navbar';
import { extendTheme } from '@chakra-ui/react'
import FirstImageDiv from './Components/Container/FirstImageDiv';


 
function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <FirstImageDiv/>
    </div>
  );
}

export default App;
