import '../components/footer.css'
import { useState } from 'react';

import React from 'react'

const Footer = () => {

  const [color, setColor] = useState('white');
  const changeColor=(color)=>{
    setColor(color);
  }
  return (
    <div className="container" style={{backgroundColor:color}}>

      <div className='box grey'>
        <ul>
        
          <li onClick={()=>{changeColor("rgb(225, 131, 131)")}} className='red' >Red</li>
          <li onClick={()=>{changeColor(" rgb(96, 96, 236)")}}className='blue'  >Blue</li>
          <li onClick={()=>{changeColor("rgb(77, 231, 77)")} } className='green'>Green</li>
          <li onClick={()=>{changeColor("rgb(226, 233, 48)")} } className='yellow' >Yellow</li>
          <li onClick={()=>{changeColor("Brown")} } className='brown'>Brown</li>
          <li onClick={()=>{changeColor("Pink")} } className='pink'>Pink</li>
          <li onClick={()=>{changeColor("Black")} } className='black' >Black</li>
          <li onClick={()=>{changeColor("White")} } className='white' >White</li>
        
        </ul>
      </div>
    </div>
  )
}

export default Footer
