import React from 'react'
import './portfolioList.css'

const PortfolioList = ({id, title, active, setSelected}) => {
  return (
      <li className={active ? 'PortfolioList active': 'PortfolioList'}
        onClick = {() => setSelected(id)}>
      {title}
    </li>
  )
} 

export default PortfolioList