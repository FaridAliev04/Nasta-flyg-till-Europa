import React, { useEffect, useRef, useState } from 'react'
import { sponsorData } from '../Data/SpansorData'
import { motion } from "framer-motion"
import Slider from 'react-slick';
import langMode from '../LangMode';

const Support = () => {
  const [myLangData,setMyLangData]=useState(localStorage.getItem("langMode")=="sv"?langMode.sv:langMode.en)

  return (
    <div className="support">
      <h1 className='support_header'>
       {myLangData.support.supportText}
      </h1>
    <motion.div  whileDrag={{cursol:"grabbing"}} className="carousel">
        <motion.div  drag="x" dragConstraints={{right:-30,left:-1070}} className="inner-carousel">
          {sponsorData.map((e)=>{
            return (
              <motion.div key={e.id} className='inner-carousel-map'>
                
                  <img  className='sponsor_img' src={e.img} alt={e.sponsorName} />
                
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>

      
    </div>
  )
}

export default Support