import React from 'react'
import { cityData } from '../CityData'
const Information = () => {
  return <div className="information">
   <p className='info-vare'>
    Vare sig det är en stadsresa, en familjesemester eller en affärsresa: vi presenterar de viktigaste sevärdheterna och ger dig nyttig information och tips för din resa.
    </p>
  <div className="info">
   
    <div className="information_index">
      <h1 className='information_number'>01</h1>
      <div className="information_index-text">
        <p className='information_category'>
          Städer
        </p>
        <p className='information_category-info'>
           De vackraste städerna i världen
        </p>
      </div>
    </div>
    <div className="information-city">
    <div className="information_city-grid">
      
        {cityData.map((e)=>{if(e.id===1)
            return <div className='information_position'>
        <h1 className='information_city-header-Stockholm'>{e.city}</h1>
        <img key={e.id} className="information_city-img" src={e.image} alt="1" />
      </div>
        }
        )}
    </div>
    <div className="information_flex">
        {cityData.map((e)=>{if(e.id>1&&e.id<=4){
           return <div className='information_position'>
            <h1 className='information_city-header'>{e.city}</h1>            
            <img className="information_city-img-flex" src={e.image} alt="1" />
            </div> 
        }
        })}
        </div>
      <div className="information_city-b">
          {cityData.map((e)=>{
            if(e.id>4&&e.id<=6){
              return <div className='information_position'>
                <h1 className='information_city-header'>{e.city}</h1>
                <img className="information_city-img-flex" src={e.image} alt="1" />
                </div>
               
            }
          })}
      </div>    
        
  

      </div>
    </div>

    <div className="info">
   
    <div className="information_index">
      <h1 className='information_number'>02</h1>
      <div className="information_index-text">
        <p className='information_category'>
        Länder
        </p>
        <p className='information_category-info'>
        Världens vackraste länder
        </p>
      </div>
    </div>
    <div className="information-city">
    <div className="information_city-grid"> 
        {cityData.map((e)=>{if(e.id===7)
            return <div className='information_position'>
        <div className="information_poosition-texts">
          <p className='information_poosition-header'>
            {e.header}
          </p>
          <p className='information_poosition-text'>
            {e.title}
          </p>
        </div>
        <img key={e.id} className="information_city-img" src={e.image} alt="1" />
      </div>
        }
        )}
    </div>
    <div className="information_flex">
        {cityData.map((e)=>{if(e.id>7&&e.id<=10){
           return <div className='information_position'>
            <h1 className='information_city-header'>{e.city}</h1>            
            <img className="information_city-img-flex" src={e.image} alt="1" />
            </div> 
        }
        })}
        </div>
      <div className="information_city-b">
          {cityData.map((e)=>{
            if(e.id>10&&e.id<=12){
              return <div className='information_position'>
                <h1 className='information_city-header'>{e.city}</h1>
                <img className="information_city-img-flex" src={e.image} alt="1" />
                </div>
               
            }
          })}
      </div>    
        
  

      </div>
    </div>

    <div className="info">
   
    <div className="information_index">
      <h1 className='information_number'>03</h1>
      <div className="information_index-text">
        <p className='information_category'>
        Öar
        </p>
        <p className='information_category-info'>
        Världens vackraste öar
        </p>
      </div>
    </div>
    <div className="information-city">
    <div className="information_city-grid"> 
        {cityData.map((e)=>{if(e.id===13)
            return <div className='information_position'>
        <div className="information_poosition-texts">
          <p className='information_poosition-header'>
            {e.header}
          </p>
          <p className='information_poosition-text'>
            {e.title}
          </p>
        </div>
        <img key={e.id} className="information_city-img" src={e.image} alt="1" />
      </div>
        }
        )}
    </div>
    <div className="information_flex">
        {cityData.map((e)=>{if(e.id>13&&e.id<=15){
           return <div className='information_position'>
            <h1 className='information_city-header'>{e.city}</h1>            
            <img className="information_city-img-flex" src={e.image} alt="1" />
            </div> 
        }
        })}
        </div>
      <div className="information_city-b">
          {cityData.map((e)=>{
            if(e.id>15&&e.id<=17){
              return <div className='information_position'>
                <h1 className='information_city-header'>{e.city}</h1>
                <img className="information_city-img-flex" src={e.image} alt="1" />
                </div>
               
            }
          })}
      </div>    
        
  

      </div>
    </div>
  
  </div>
  
}

export default Information