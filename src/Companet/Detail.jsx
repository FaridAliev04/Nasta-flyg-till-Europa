import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import { supabase } from '../supabase';
import Navbar from './Navbar';


const Detail = () => {
    const {id} = useParams()
        const [info, setInfo] = useState([]);
        useEffect(() => {
            getData();
          }, []);
        
          async function getData() {
            try {
              const { data, error } = await supabase
                .from("information")
                .select("*")
                .limit(30);
              if (error) throw error;
              if (data != null) {
                setInfo(data);
                
              }
            } catch (error) {
              console.log("q");
            }
          }
          
        //   const object=info.find((e)=>e.id==id)
        //     console.log(object)   
       
  
          
      return (
        <div>
            <Navbar/>
            {info.map((e)=>{
                if(e.id==id){
                   return <div className='detail_map'>
                        <div className="detail_img">
                            <img src={e.img} alt="" />
                        </div>
                        <div className="detail_sell">
                            <div className="detail_sell-infomation">
                                <h1 className='detail_sell-name'>{e.cityName}</h1>
                                <p className='detail_sell-text'>{e.text}</p>
                                <p className='detail_sell-price'>{e.price}&euro;</p>
                            </div>
                        </div>

                    </div>
                }
            })}
        </div>
      )
    
    
}

export default Detail