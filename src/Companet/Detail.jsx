import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import { supabase } from '../supabase';
import Navbar from './Navbar';
import Footer from "./Footer"

const Detail = () => {
    const {id} = useParams()
        const [info, setInfo] = useState([]);
        const [test,setTest] =useState(true)
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
          async function online(){
            const {data,error}=await supabase.from("information").update({
              offline:true
            }).eq("id",id)            
          }
  
  console.log(info)
          
      return (
        <div>
            <Navbar/>
            {info.map((e)=>{
                if(e.id==id){
                   return <div key={e.id} className='detail_map'>
                        <div className="detail_img-div">
                            <img className="detail_img" clas src={e.img} alt="" />
                        </div>
                        <div className="detail_sell">
                            <div className="detail_sell-infomation">
                                <h1 className='detail_sell-name'>{e.cityName}</h1>
                                <p className='detail_sell-text'>{e.text}</p>
                                <p className='detail_sell-price'>{e.price}&euro;</p>
                            </div>
                            
                              <form className='detail_form'>
                                <div className="date">
                                  <label >Flyg datum</label>
                                  <input type="date" name="" id="" />
                                </div>
                                <div className="date">
                                  <label >Återlämningsdatum</label>
                                  <input type="date" name="" id="" />
                                </div>
                              </form>
                            
                            <div className='person_number-div'>
                              <button>-</button>
                              <span>0</span>
                              <button>+</button>
                            </div>

                            <button onClick={()=>online()}>Köpa</button>
                        </div>

                    </div>
                }
            })}

            <Footer/>
        </div>
      )
    
    
}

export default Detail