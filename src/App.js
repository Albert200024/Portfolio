import './App.css';
import { useState } from 'react';

//page
import TopBar from './Component/topBar/TopBar';
import Menu from './Component/menu/Menu';
import Intro from './Component/intro/Intro';
import Portfolio from './Component/Portfolio/Portfolio';
import Works from './Component/works/Works';
import Testimonials from './Component/testemonials/Testemonials';
import Contacts from './Component/contact/Contact';

function App() {
  const [menuOpen, setMenuOpen] = useState(false) 

  return (
       <div className="app">
           <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
           <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
         <div className='sections'>
             <Intro/>
             <Portfolio/>
             <Works/>
             <Testimonials/>
             <Contacts/>
         </div>
      </div>
  );
}

export default App;
