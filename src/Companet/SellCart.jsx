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
      
        
      

      const filter=info.filter((e)=>{
          if(e.offline===true){
            return e
          }
        })
      
    
  return (
    <div>
      {filter.map((e)=>{
        return <div>
          <img src={e.img} alt="" />
        </div>
      })}
    </div>
  )
}

export default SellCart