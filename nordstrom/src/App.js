import logo from './logo.svg';
import './App.css';
import Header from './Components/Navbar/Header';
import Navbar from './Components/Navbar/Navbar';
import { extendTheme } from '@chakra-ui/react'
import FirstImageDiv from './Components/Container/FirstImageDiv';
import Footer from './Components/Footer/Footer';


 
function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <FirstImageDiv/>
      <Footer/>
    </div>
  );
}

export default App;
