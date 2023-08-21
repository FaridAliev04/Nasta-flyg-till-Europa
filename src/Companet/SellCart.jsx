import React, { useState,useEffect } from 'react'
import { supabase } from '../supabase';
const SellCart = () => {
    const [info,setInfo]=useState([])
    const [offline,setOffline]=useState([])
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
      
        
      
      // {info.filter((e)=>{
      //   if(e.offline===true){
      //     offline.push(e)
      //   }
      // })}
      // console.log(offline)
      const filter=info.filter((e)=>{
          if(e.offline===true){
            return e
          }
        })
      
    
  return (
    <div>
      {/* {
        offline.map((e)=>{
          return <div>
            <img className='f' src={e.img} alt="" />
          </div>
        })
      } */}

      {filter.map((e)=>{
        return <div>
          <img src={e.img} alt="" />
        </div>
      })}
    </div>
  )
}

export default SellCart