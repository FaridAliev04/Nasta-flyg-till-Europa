import { useState } from 'react'
import React from 'react'
import { cityData,öarData,länderData } from '../CityData'
import { Fade, Slide } from "react-awesome-reveal";
import { motion } from "framer-motion";
import langMode from '../LangMode';

const Information = () => {
  const [myLangData,setMyLangData]=useState(localStorage.getItem("langMode")=="sv"?langMode.sv:langMode.en)
  
  return <div className="information">
    <div className="svg">
      {/* <img src="svg/svg-intro.svg" alt="" /> */}
    </div>
  <div className="information_box">
   <p className='info-vare'>
    {myLangData.information.infovare}
    </p>
    <div className="info-gap">
        <div   className="info">
        <Slide>
        <div  className="info-img">
          <div className="info_img-main_div">
              {cityData.map((e)=>{
                if(e.id===1 ){
                  return <img className='data-img ' key={e.id} src={e.image} alt={e.city} />
                }
              })}
            </div>
        </div>
        <div className="info_text">
          
          <h1 className='info_category'>
            <span className='info_category-number'>
              1.
            </span>
             {myLangData.information.länder}
          </h1>
          <p className='info_texts'>
          {myLangData.information.länderText}
          </p>
          
        </div>
        </Slide>
        </div>
 
        <div   className="info">
        <Slide direction='right'>
        <div className="info_text">
          
          <h1 className='info_category'>
            <span className='info_category-number'>
              2.
            </span>         
            {myLangData.information.städer}
          </h1>
          <p className='info_texts'>
          {myLangData.information.städerText}
          </p>
          
        </div>
        
        <div  className="info-img">
          <div className="info_img-main_div">
              {länderData.map((e)=>{
                if(e.id===7 ){
                  return <img className='data-img ' key={e.id} src={e.image} alt={e.city} />
                }
              })}
            </div>
        </div>
        </Slide>
        </div>

        <div   className="info">
        <Slide>
        <div  className="info-img">
          <div className="info_img-main_div">
              {öarData.map((e)=>{
                if(e.id===13){
                  return <img className='data-img ' key={e.id} src={e.image} alt={e.city} />
                }
              })}
            </div>
        </div>
        <div className="info_text">
          
          <h1 className='info_category'>
            <span className='info_category-number'>
              3.
            </span>
             {myLangData.information.oar}
          </h1>
          <p className='info_texts'>
          {myLangData.information.oarText}
          </p>
          
        </div>
        </Slide>
        </div>
      
      </div>
      </div>
  </div>
  
}

export default Information