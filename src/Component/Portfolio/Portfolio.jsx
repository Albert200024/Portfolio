import React, { useEffect, useState } from 'react'
import './portfolio.css'
import PortfolioList from '../portfolioList/PortfolioList'
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio    
} from '../../data'

const Portfolio = () => {
   const [selected, setSelected] = useState('featured')
   const [data, setData] = useState([]);
   const list = [
        {
          id: "featured",
          title: "Featured",
        },
        {
          id: "web",
          title: "Web App",
        },
        {
          id: "mobile",
          title: "Mobile App",
        },
        {
          id: "design",
          title: "Design",
        },
        {
          id: "content",
          title: "Content",
        },
      ];
     
    useEffect(() =>{
         switch(selected){
              case 'featured':
                  setData(featuredPortfolio);
                  break;
               case 'web':
                  setData(webPortfolio);
                  break;
               case 'mobile':
                    setData(mobilePortfolio);
                    break;
               case 'design':
                    setData(designPortfolio);
                    break;             
               case 'content':
                    setData(contentPortfolio);
                    break;
                default:
                     setData(featuredPortfolio)
         }
    }, [selected])

return (
  <div className='portfolio' id='portfolio'>
     <h1>Portfolio</h1>
     <div>
     <ul className='p-tiitle'>
         {list.map((item, index) => (
              <PortfolioList 
                     key={index}
                     title={item.title} 
                     id ={item.id}
                     active={selected === item.id}
                     setSelected = {setSelected}
               />
         ))}
     </ul>
     </div>
     <div className="container">
         {data.map((data, index) => (
                <div className="item" key={index}>
                     <img src={data.img} alt=''/>
                     <h3>{data.title}</h3>
                </div>
         ))}
     </div>
  </div> 
)
}

export default Portfolio
