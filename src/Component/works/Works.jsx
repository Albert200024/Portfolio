import React, { useState } from 'react'
import './work.css'

// image
import mobile from '../../assets/mobile.png'
import globe from '../../assets/globe.png'
import writing from '../../assets/writing.png'
import arrow from '../../assets/arrow.png'

const Works = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        {
            id: "1",
            icon: mobile,
            title: "Web Design",
            desc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            img:
              "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
          },
          {
            id: "2",
            icon: globe,
            title: "Mobile Application",
            desc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
              "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
          },
          {
            id: "3",
            icon: writing,
            title: "Branding",
            desc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
              "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
          },
    ]

    const handleClick = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };


  return (
    <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
          {data.map(obj =>(
             <div className="w-container" key={obj.id}>
                 <div className="w-item">
                      <div className="w-left">
                            <div className="w-leftContainer">
                                 <div className="w-imageContainer">
                                     <img src={obj.icon} alt=""/>
                                 </div>
                                 <h2>{obj.title}</h2>
                                 <p>{obj.desc}</p>
                                 <span></span>
                            </div> 
                      </div>
                      <div className="w-right">
                           <img src={obj.img} alt=''/>
                      </div>
                 </div>
              </div>
              ))    
           }
       </div>
         <img src={arrow} 
              className = 'arrow arrowLeft' 
              alt=''
              onClick={() => handleClick('left')}
          
         />
         <img src={arrow} 
              className = 'arrow arrowRight' 
              alt=''
              onClick={() => handleClick()}
         />
    </div>
  );
}

export default Works
