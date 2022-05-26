import './topBar.css'
import { useState } from 'react';

// iqon
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

const TopBar = ({menuOpen, setMenuOpen}) => {

  return (
    <div>
         <div className={'topBar ' + (menuOpen && 'active')}>
         {/* active */}
         <div className="wrapper">
              <div className="left">
                  <a href='#intro' className='logo'>genius.</a>
                  <div className="itemContiner">
                       <PersonIcon className='iqon'/>
                       <span> +374 93349605</span>
                  </div>
                  <div className="itemContiner">
                       <MailIcon  className='iqon'/>
                       <span>albert.ghumashyan200@mail.ru</span>
                  </div>
              </div>
              {/* activeHamburger */}
              <div className="right">
                    <div  onClick={() => setMenuOpen(!menuOpen)}
                         className={'hamburger ' + (menuOpen && 'activeHamburger')}>
                          <span className='line1'></span>
                          <span className='line2'></span>
                          <span className='line3'></span>
                    </div>
              </div>
         </div>
    </div>
    </div>
  )
}

export default TopBar
