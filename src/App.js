
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Pages/Home';
import Features from './Component/Pages/Features';
import Pricing from './Component/Pages/Pricing';
function App() {
  return (
<>
<BrowserRouter>
<Header />
<Routes>
<Route path='/' element={<Home />} />
<Route path='/Features' element={<Features/>} />
<Route path='/Pricing' element={<Pricing/>} />



</Routes>

</BrowserRouter>

</>
  );
}

export default App;
