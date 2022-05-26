import './menu.css'
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

const Menu = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
    <ul>
        <li onClick={() => setMenuOpen(false)}>
            <a href='#intro'>Home</a>
        </li>
        <li  onClick={() => setMenuOpen(false)}>
            <a href='#portfolio'>Portfolio</a>
        </li>
        <li  onClick={() =>setMenuOpen(false)}>
            <a href='#works'>Works</a>
        </li>
        <li  onClick={() =>setMenuOpen(false)}>
            <a href='#testimonials'>Testimonials</a>
        </li>
        <li  onClick={() =>setMenuOpen(false)}> 
            <a href='#contact'>Contact</a>
        </li>
    </ul>
    <div className='hideCont'>
    <div className='hideBlock'>
                  <div className="h-itemContiner">
                       <PersonIcon className='iqon'/>
                       <span> +374 93349605</span>
                  </div>
                  <div className="h-itemContiner">
                       <MailIcon  className='iqon'/>
                       <span>albert.ghumashyan200@mail.ru</span>
                  </div>
    </div>
    </div>
 </div>
  )
}

export default Menu
