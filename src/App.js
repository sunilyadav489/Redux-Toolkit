import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
