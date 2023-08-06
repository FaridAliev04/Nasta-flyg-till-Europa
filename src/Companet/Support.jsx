import React, { useEffect, useRef, useState } from 'react'
import { sponsorData } from '../Data/SpansorData'
import { motion } from "framer-motion"

const Support = () => {

  return (
    <div className="support">
      <h1 className='support_header'>
       TACK FÖR STÖDET
      </h1>
    <motion.div  whileDrag={{cursol:"grabbing"}} className="carousel">
        <motion.div  drag="x" dragConstraints={{right:-30,left:-1070}} className="inner-carousel">
          {sponsorData.map((e)=>{
            return (
              <motion.div key={e.id} className='inner-carousel-map'>
                <a target="_blank" className='support_link' href={e.link}>
                  <img  className='sponsor_img' src={e.img} alt={e.sponsorName} />
                </a>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Support