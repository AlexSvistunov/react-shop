import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import Cartpage from './pages/CartPage/CartPage';
import MainPage from './pages/MainPage/MainPage';

function App() {
 return <div className='App'>
  <Router>
    <Header></Header>
    <Routes>
      <Route path='/' element={<MainPage/>}></Route>
      <Route path='/cart' element={<Cartpage/>}></Route>
    </Routes>
  </Router>

 </div>
}

export default App
