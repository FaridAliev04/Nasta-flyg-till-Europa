import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState,useEffect } from 'react'
import { supabase } from '../supabase'
import { useNavigate } from 'react-router-dom'
import { Roll } from 'react-awesome-reveal'
import langMode from '../LangMode'
const Favorite = () => {
    const [info,setInfo]=useState([])
    const [test,setTest]=useState(false)
    const navigate=useNavigate()
    const [myLangData,setMyLangData]=useState(localStorage.getItem("langMode")=="sv"?langMode.sv:langMode.en)
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
        if(e.favorite===true){
            return e
        }
    })
    console.log(filter.length)

    async function favoriteTestFalse(d){ 
      const {data,error}=await supabase.from("information").update({
        favorite:false
      }).eq("id",d.id) 
      setInfo(info.map((e)=>{
        if(d.id===e.id){
          return {...e,favorite:false}
        }
        return e
      }))
    }
  return (
    <div className='tures_info-map'>
   {filter.length===0?<h1 className='filter_not-favorite'>{myLangData.favorite.favoriteMesaj}</h1>:
      filter.map((e)=>{
        return (<Roll>
          <div key={e.id} className="tures_cart">
            <div className="tures_cart-img_position">
              <img className="tures_cart-img" src={e.img} alt="" />
                <img
                className="tures_cart-country_flag"
                src={e.countryImg}
                alt=""
              />
            </div>
            <div className="tures_cart-texts">
              <h1 className="tures_cart-name">{localStorage.getItem("langMode")=="sv"?e.cityName:e.cityNameEng}</h1>
              <p className="tures_cart-price">{e.price}&euro;</p>
              <div className="tures_cart-allBtn">
                <button className="tures_cart-btn" onClick={() => navigate(`/card/detail/${e.id}`)}>{myLangData.tures.turesBtn}</button>
                <div className="tures_cart-heart-btn">
                  <img onClick={()=>(favoriteTestFalse(e))} className={e.favorite===true?"tures_cart-icon":"tures_cart-icon-none"} src="svg/heart-check-svgrepo-com (1).svg" alt="" />                  
                </div>
              </div>
            </div>
          </div></Roll>)
      })
}

    </div>
  )
}

export default Favorite