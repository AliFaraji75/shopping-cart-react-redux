

import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import Details from './components/Detail';
import Store from './components/Store';
import store from './redux/store';
import NavBar from './components/NavBar';
import ShopCart from './components/ShopCart';


function App() {
  return (
    
        <Provider store={store} >
          <NavBar/>
          <Routes>
            <Route path='/products/:id' element={<Details/>}/>
            <Route path='/products' element={<Store/>}/>
            <Route  path='/cart' element={<ShopCart/>}/>
            <Route path='/' element={<Store/>}/>
          </Routes>
    
        </Provider>
  );
}

export default App;
