// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Dummy';
import Homepge from './Homepge';
import Aboutus from './Landing/About';
function App() {
  return (
<BrowserRouter> 
<Header/>
<Routes>
<Route path='/' element={<Homepge/>}/> 
<Route path='/about' element={<Aboutus/>}/>     
</Routes>
</BrowserRouter>
  );
}

export default App;



