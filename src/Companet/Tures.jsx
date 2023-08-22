import { useState, useEffect } from "react";
import React from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {Zoom} from "react-awesome-reveal"
const Tures = () => {

  const [info, setInfo] = useState([]);
 
  const favorite=useSelector((e)=>e.name.value)
  const [disFavorite,setDisFavorite]=useState()
  const dispatch=useDispatch()
  console.log(favorite)
  const navigate=useNavigate()
 
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
  console.log(info);

  async function favoriteTestTrue(d){
    const {data,error}=await supabase.from("information").update({
      favorite:true
    }).eq("id",d.id)
    setInfo(info.map((e)=>{
      if(d.id===e.id){
        return {...e,favorite:true}
      }
      return e
    }))
  }

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
    <div className="tures">
      
        <dir className="tures_info-map">
          
            {info.map((e) => {
        return (<Zoom>
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
              <h1 className="tures_cart-name">{e.cityName}</h1>
              <p className="tures_cart-price">{e.price}&euro;</p>
              <div className="tures_cart-allBtn">
                <button className="tures_cart-btn" onClick={() => navigate(`/card/detail/${e.id}`)}>köp en biljett</button>
                <div className="tures_cart-heart-btn">
                  <img onClick={()=>(favoriteTestTrue(e))} className={e.favorite===false?"tures_cart-icon":"tures_cart-icon-none"} src="svg/heart-check-svgrepo-com (1).svg" alt="" />
                  <img onClick={()=>(favoriteTestFalse(e))} className={e.favorite===true?"tures_cart-icon":"tures_cart-icon-none"} src="svg/heart-x-svgrepo-com (2).svg" alt="" />                  
                </div>
              </div>
            </div>
          </div></Zoom>
        );
            })}
      </dir>
    </div>
  );
};

export default Tures;
