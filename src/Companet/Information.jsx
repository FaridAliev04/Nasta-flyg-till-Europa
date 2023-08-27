import { useState } from 'react'
import React from 'react'
import { cityData,öarData,länderData } from '../CityData'
import { Fade, Slide } from "react-awesome-reveal";
import { motion } from "framer-motion";

const Information = () => {

  
  return <div className="information">
    <div className="svg">
      {/* <img src="svg/svg-intro.svg" alt="" /> */}
    </div>
  <div className="information_box">
   <p className='info-vare'>
    Vare sig det är en stadsresa, en familjesemester eller en affärsresa: vi presenterar de viktigaste sevärdheterna och ger dig nyttig information och tips för din resa.
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
             Städer
          </h1>
          <p className='info_texts'>
          De officiella turistråden i Skandinavien samarbetar ibland under ett paraply, till exempel Scandinavian Tourist Board. Samarbetet introducerades för den asiatiska marknaden 1986, när den svenska nationella turiststyrelsen anslöt sig till den danska nationella turiststyrelsen för att samordna mellanstatlig marknadsföring av de två länderna. Norges regering gick in ett år senare. Alla fem nordiska regeringarna deltar i de gemensamma marknadsföringsinsatserna i USA genom Scandinavian Tourist Board of North America.
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
            Länder
          </h1>
          <p className='info_texts'>
          Skandinavien är en delregion i norra Europa, med starka historiska, kulturella och språkliga band mellan de ingående folken. Skandinavien hänvisar oftast till Danmark, Norge och Sverige. I engelsk användning kan det ibland också syfta mer snävt till den skandinaviska halvön (som utesluter Danmark men inkluderar en del av Finland), eller mer allmänt till alla de nordiska länderna, inklusive Finland, Island och Färöarna.
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
             Öar
          </h1>
          <p className='info_texts'>
          Sylt, Korsika eller Kanarieöarna - öar är bland de mest populära resmålen. På den här sidan hittar du ett urval av de populäraste och vackraste öarna för din nästa semester.Länet som bildas av skärgården är det näst minsta till yta och är det minst befolkade i Sverige. Trots den lilla storleken på grund av dess smala bredd är köravståndet mellan de yttersta punkterna på de befolkade öarna cirka 170 kilometer
          </p>
          
        </div>
        </Slide>
        </div>
      
      </div>
      </div>
  </div>
  
}

export default Information