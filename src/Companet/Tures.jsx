import { useState, useEffect } from "react";
import React from "react";
// import { useParams } from "react-router-dom";
import { supabase } from "../supabase";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {BsBookmarkHeartFill,BsFillBookmarkFill} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
import {LuHeart} from "react-icons/lu"
import {LuHeartOff} from "react-icons/lu"

const Tures = (probsId) => {

  const [info, setInfo] = useState([]);
  const [icons,setIcons]=useState(false)
  const [favorit,setFavorite]=useState(false)
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

  async function favoriteTestTrue(e){
    const {data,error}=await supabase.from("information").update({
      favorite:true
    }).eq("id",e.id) 

  }

  async function favoriteTestFalse(e){
    const {data,error}=await supabase.from("information").update({
      favorite:false
    }).eq("id",e.id) 

    
  }

  
 
  return (
    <div className="tures">
        <dir className="tures_info-map">
            {info.map((e) => {
        return (
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
              <button className="tures_cart-btn" onClick={() => navigate(`/card/detail/${e.id}`)}>köp en biljett</button>
            </div>
          </div>
        );
            })}
      </dir>
    </div>
  );
};

export default Tures;
