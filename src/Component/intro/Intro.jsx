import './intro.css'
// image
import man from '../../assets/man.png'
import down from '../../assets/down.png'

const Intro = () => {
  return (
    <div className='intro' id='intro'>
      <div className="left left1">
          <div className="imgContainer">
             <img src={man} alt=''/>
          </div>
      </div>
      <div className="right">
          <div className="wrapper-i">
               <h2>Hi There, I'm</h2>
               <h1>Albert Ghumashyan</h1>
               <h3>React <span>Developer</span></h3>         
          </div>
          <a href='#portfolio'>
              <img src={down} alt=''/>
          </a>
      </div>
    </div>
  )
}

export default Intro
