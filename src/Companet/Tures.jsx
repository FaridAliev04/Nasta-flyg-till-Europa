import { useState, useEffect } from "react";
import React from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {Zoom} from "react-awesome-reveal"
import { AiOutlineSearch} from "react-icons/ai"
const Tures = () => {

  const [info, setInfo] = useState([]);
  const [secondInfo,setSecondInfo]=useState([])
  const [search,setSearch]=useState()
  const favorite=useSelector((e)=>e.name.value)
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

  const sorrtAZ=()=>{
    const strAscending = [...info].sort((a, b) =>
    a.cityName > b.cityName ? -1 : 1,
  );
  setInfo(strAscending)
  }
  const sorrtSell=()=>{
    const strAscending = [...info].sort((a, b) =>
    a.price > b.price ? 1 : -1,
  );
  setInfo(strAscending)
  }
  

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
 
  console.log(search)
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
 console.log(info)
  return (
    <div className="tures">
      <div className="tures_bg">
        <div className="tures_bg-inp_div">
          <input placeholder="vänligen ange land eller stad" onChange={(e)=>setSearch(e.target.value)} className="tures_bg-inp" type="text" name="" id="" />
          <label   className="tures_bg-inp_label"><AiOutlineSearch className="tures_bg-inp_label-search"/></label>
        </div>
        <div className="filter_div">
          <h1>Filtrera</h1>
          <div className="filter_position">
            <div className="filter_box">
              <input onClick={()=>sorrtAZ()} name="sortAz" type="radio" id="sortAz" />
              <label htmlFor="sortAz">A-Z</label>
            </div>
            <div className="filter_box">
              <input onClick={()=>sorrtSell()} name="sortSell" type="radio" id="sortSell" />
              <label htmlFor="sortSell">A</label>
            </div>
          </div>
        </div>
      </div>
        <dir className="tures_info-map">
          {info.filter((e)=>{
            if(typeof(search)==="undefined"){
              return e
            }
            if(search==""){
              return e
            } else if(e.country.includes(search) ){
              return e
            } else if(e.cityName.includes(search)){
              return e
            }
          }).map((e)=>{
            return(<Zoom>
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
                      <img onClick={()=>(favoriteTestTrue(e))} className={e.favorite===false?"tures_cart-icon":"tures_cart-icon-none"} src="svg/heart-x-svgrepo-com (2).svg" alt="" />
                      <img onClick={()=>(favoriteTestFalse(e))} className={e.favorite===true?"tures_cart-icon":"tures_cart-icon-none"} src="svg/heart-check-svgrepo-com (1).svg" alt="" />                  
                    </div>
                  </div>
                </div>
              </div></Zoom>)
          })}
         {/* {
            info.map((e) => {
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
                  <img onClick={()=>(favoriteTestTrue(e))} className={e.favorite===false?"tures_cart-icon":"tures_cart-icon-none"} src="svg/heart-x-svgrepo-com (2).svg" alt="" />
                  <img onClick={()=>(favoriteTestFalse(e))} className={e.favorite===true?"tures_cart-icon":"tures_cart-icon-none"} src="svg/heart-check-svgrepo-com (1).svg" alt="" />                  
                </div>
              </div>
            </div>
          </div></Zoom>
        );
              })} */}
      </dir>
    </div>
  );
};

export default Tures;
