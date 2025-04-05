import React from 'react';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Trending from './pages/Trending';
import Global from './pages/Global';
import Country from './pages/Country';
import Economy from './pages/Economy';
import Sports from './pages/Sports';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Trending/>} />
          <Route path='/Global' element={<Global/>} />
          <Route path='/Country' element={<Country/>} />
          <Route path='/Economy' element={<Economy/>} />
          <Route path='/Sports' element={<Sports/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
