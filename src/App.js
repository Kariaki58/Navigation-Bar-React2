import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Item from './components/Item';
import Services from './components/Services';


function App() {
  const[Switch, SetSwitch] = useState(true)
  const handleChange = () => {
    SetSwitch(!Switch);
  }
  return (
    <div className="App">
      <div className='navlink'>
        <h1>Logo</h1>
        <ul className={Switch? 'nav-data': "toggle"}>
          <li><Link to="/Serviecs" className='Link'>Services</Link></li>
          <li><Link to="/Contact" className='Link'>Contact</Link></li>
          <li><Link to="/About" className='Link'>About</Link></li>
          <li><Link to="/Items" className='Link'>Items</Link></li>
        </ul>
        <i className={Switch? "fa fa-close control": "fa fa-reorder control"} style={{fontSize: "30px"}} onClick={handleChange}></i>
      </div>
      <Routes>
        <Route path='/Serviecs' element={<Services />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Items' element={<Item />} />
      </Routes>
    </div>
  );
}

export default App;
