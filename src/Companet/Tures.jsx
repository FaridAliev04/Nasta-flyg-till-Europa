import { useState, useEffect } from "react";
import React from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {Zoom} from "react-awesome-reveal"
import { AiOutlineSearch} from "react-icons/ai"
import {BsPlusCircleFill,BsFilterLeft} from "react-icons/bs"
import { artim } from "../toolkit/infoPlus";
import langMode from "../LangMode";
const Tures = () => {

  const [info, setInfo] = useState([]);
  const [infoEng,setInfoEng]=useState([])
  const [search,setSearch]=useState()
  const [block,setBlock]=useState(false)
  const valueId=useSelector((e)=>e.artim.value)
  const dispatch=useDispatch()

  const navigate=useNavigate()
  

  useEffect(() => {
    getData();
    
  }, []);

  const [myLangData,setMyLangData]=useState(localStorage.getItem("langMode")=="sv"?langMode.sv:langMode.en)

console.log(info)
console.log(infoEng)
  console.log(myLangData)

  async function getData() {
    try {
      const { data, error } = await supabase
        .from("information")
        .select("*")
        .limit(30);
      if (error) throw error;
      const strAscending = [...data].sort((a, b) =>
  a.id > b.id ? 1 : -1,)
      if (data != null) {
        setInfo(strAscending);
      }
    } catch (error) {
      console.log("q");
    }
  }



  const sorrtAZ=()=>{
    const cityNameSort = [...info].sort((a, b) =>
    a.cityName > b.cityName ? -1 : 1
  );
  setInfo(cityNameSort)
  }
  const sorrtSell=()=>{

    const priceSort = [...info].sort((a, b) =>
    a.price > b.price ? 1 : -1,
  );
  setInfo(priceSort)
}

const sortSellYuksek=()=>{

  const priceSortAZ = [...info].sort((a, b) =>
  a.price > b.price ? -1 : 1,
);
setInfo(priceSortAZ)
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

  const onClickBlock=()=>{
    if(block===false){
    setBlock(true)
  }else{
    setBlock(false)
  }
  }
  return (
    <div className="tures">
      <div className="tures_bg">
        <div className="tures_bg-inp_div">
          <input placeholder={myLangData.filter.search} onChange={(e)=>setSearch(e.target.value)} className="tures_bg-inp" type="text" name="" id="" />
          <label   className="tures_bg-inp_label"><AiOutlineSearch className="tures_bg-inp_label-search"/></label>
        </div>
        <div className="filter_div">
          <h1 onClick={()=>onClickBlock()} className="filter_header">{myLangData.filter.filterBtn} <div className="filter_icons-div"><BsFilterLeft className="filter_icons"/></div></h1>
          <div className={block===false?"filter_position":"filter_position-block"}>
            <div className="filter_box">
              <input onClick={()=>sorrtAZ()} name="sortSell" type="radio" id="sortAz" />
              <label htmlFor="sortAz">Z-A </label>
            </div>
            <div className="filter_box">
              <input onClick={()=>sorrtSell()} name="sortSell" type="radio" id="sortSell" />
              <label htmlFor="sortSell">{myLangData.filter.azCox}</label>
            </div>
            <div className="filter_box">
              <input onClick={()=>sortSellYuksek()} name="sortSell" type="radio" id="sortSellYuksek" />
              <label htmlFor="sortSellYuksek">{myLangData.filter.coxAz}</label>
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
            }else if(e.cityNameEng.includes(search)){
              return e
            }
          }).map((e)=>{
            if(e.id<=valueId){
            return(<Zoom key={e.id} >
              <div className="tures_cart">
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
                      <img onClick={()=>(favoriteTestTrue(e))} className={e.favorite===false?"tures_cart-icon":"tures_cart-icon-none"} src="svg/heart-x-svgrepo-com (2).svg" alt="" />
                      <img onClick={()=>(favoriteTestFalse(e))} className={e.favorite===true?"tures_cart-icon":"tures_cart-icon-none"} src="svg/heart-check-svgrepo-com (1).svg" alt="" />                  
                    </div>
                  </div>
                </div>
              </div></Zoom>)}
          })}
         
      </dir>
      <div onClick={()=>dispatch(artim())} className="tures_info-plus_div">
        <BsPlusCircleFill className="tures_info-plus"/>
      </div>
    </div>
  );
};

export default Tures;
