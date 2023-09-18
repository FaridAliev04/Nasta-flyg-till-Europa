import React from 'react'
import langMode from '../LangMode';
import { useState } from 'react';
import { Zoom } from 'react-awesome-reveal'
import { supabase } from '../supabase';

const Info = ({newInfo}) => {
    const [cityNameEn,setCityNameEn]=useState()
    const [cityNameSv,setCityNameSv]=useState()
    const [imgLink,setImgLink]=useState()
    const [countryNameEn,setCountryNameEn]=useState()
    const [countryNameSv,setCountryNameSv]=useState()
    const [flagLink,setFlagLink]=useState()
    const [ticketPrice,setTicketPrice]=useState()
    const [test,setTest]=useState(true)
    const [myLangData,setMyLangData]=useState(localStorage.getItem("langMode")=="sv"?langMode.sv:langMode.en)

    async function uptateData(){
        const {data,error}=await supabase.from("information").update({
            cityName:cityNameSv,
            img:imgLink,
            country:countryNameSv,
            countryImg:flagLink,
            price:ticketPrice,
            cityNameEng:cityNameEn,
            countryEng:countryNameEn
        }).eq("id",newInfo.id)
        window.location.reload()
        
      }

    async function deleteInfo(){
        try{
        const {data,error}=await supabase.from("information").delete().eq("id",newInfo.id)
            if(error) throw error
            window.location.reload()
        }
        catch{
            console.log("error")
        }
    }
  return (<Zoom key={newInfo.id} >{
    test?
    <div className="tures_cart">
      <div className="tures_cart-img_position">
        <img className="tures_cart-img" src={newInfo.img} alt="" />
          <img
          className="tures_cart-country_flag"
          src={newInfo.countryImg}
          alt=""
        />
      </div>
      <div className="tures_cart-texts">
        <h1 className="tures_cart-name">{localStorage.getItem("langMode")=="sv"?newInfo.cityName:newInfo.cityNameEng}</h1>
        <p className="tures_cart-price">{newInfo.price}&euro;</p>
        <div className="tures_cart-allBtn">
          <div className="tures_cart-heart-btn">
              <button onClick={()=>setTest(false)}  className='info_crud-btn info_crud-update'>{myLangData.adminPanel.uptateBtn}</button>
              <button onClick={()=>deleteInfo()}  className='info_crud-btn info_crud-delete'>{myLangData.adminPanel.deleteBtb}</button>
          </div>
        </div>
      </div>
    </div>:<div className="update_info-div">
                    <div className="adminpanel_inp-div">
                        <label className='adminpanel_label'>{myLangData.adminPanel.cityNameEng}</label>
                        <input onChange={(e)=>setCityNameEn(e.target.value)}  type="text" className='adminpanel_inp' />
                    </div>
                    <div className="adminpanel_inp-div">
                        <label className='adminpanel_label'>{myLangData.adminPanel.cityNameSv}</label>
                        <input onChange={(e)=>setCityNameSv(e.target.value)}  type="text" className='adminpanel_inp' />
                    </div>
                    <div className="adminpanel_inp-div">
                        <label className='adminpanel_label'>{myLangData.adminPanel.imgLink}</label>
                        <input onChange={(e)=>setImgLink(e.target.value)}  type="text" className='adminpanel_inp' />
                    </div>
                    <div className="adminpanel_inp-div">
                        <label className='adminpanel_label'>{myLangData.adminPanel.countryNameEng}</label>
                        <input  onChange={(e)=>setCountryNameEn(e.target.value)} type="text" className='adminpanel_inp' />
                    </div>
                    <div className="adminpanel_inp-div">
                        <label className='adminpanel_label'>{myLangData.adminPanel.countryNameSv}</label>
                        <input onChange={(e)=>setCountryNameSv(e.target.value)} type="text" className='adminpanel_inp' />
                    </div>
                    <div className="adminpanel_inp-div">
                        <label className='adminpanel_label'>{myLangData.adminPanel.flagLink}</label>
                        <input onChange={(e)=>setFlagLink(e.target.value)}  type="text" className='adminpanel_inp' />
                    </div>
                    <div className="adminpanel_inp-div">
                        <label className='adminpanel_label'>{myLangData.adminPanel.ticketPrice}</label>
                        <input onChange={(e)=>setTicketPrice(e.target.value)}  type="text" className='adminpanel_inp' />
                    </div>
                    <div className="uptate-div">
                        <button onClick={()=>uptateData()}  className='info_crud-btn info_crud-update'>
                            {myLangData.adminPanel.uptateBtn}
                        </button>
                        <button onClick={()=>deleteInfo()}  className='info_crud-btn info_crud-delete'>{myLangData.adminPanel.deleteBtb}</button>
                        <button onClick={()=>setTest(true)}  className='info_crud-btn info_crud-none'>X</button>
                    </div>
                </div>
    }</Zoom>)
    
  
}

export default Info