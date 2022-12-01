

import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductContextProvider from './Context/ProductContextProvider';
import Details from './components/Detail';
import Store from './components/Store';
import CartContextProvider from './Context/CartContextProvider'
import NavBar from './components/NavBar';
import ShopCart from './components/ShopCart';


function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <NavBar />
          <Routes>
            <Route path='/products/:id' element={<Details/>}/>
            <Route path='/products' element={<Store/>}/>
            <Route  path='/cart' element={<ShopCart/>}/>
            <Route path='/' element={<Store/>}/>
          </Routes>
      </CartContextProvider>
   
    </ProductContextProvider>
  );
}

export default App;
