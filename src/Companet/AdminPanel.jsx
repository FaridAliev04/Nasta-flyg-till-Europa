import React, { useEffect } from 'react'
import ModeNav from './ModeNav'
import Footer from './Footer'
import langMode from '../LangMode';
import { useState } from 'react';
import { supabase } from '../supabase';
import Info from './Info';
import { Zoom } from 'react-awesome-reveal';

const AdminPanel = () => {

    const [cityNameEn,setCityNameEn]=useState()
    const [cityNameSv,setCityNameSv]=useState()
    const [imgLink,setImgLink]=useState()
    const [countryNameEn,setCountryNameEn]=useState()
    const [countryNameSv,setCountryNameSv]=useState()
    const [flagLink,setFlagLink]=useState()
    const [ticketPrice,setTicketPrice]=useState()

    const [test,setTest]=useState(true)

    const [info,setInfo]=useState([])
    const [myLangData,setMyLangData]=useState(localStorage.getItem("langMode")=="sv"?langMode.sv:langMode.en)

    useEffect(()=>{
        getData()
    },[])

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
      console.log(info)

      async function createInfo(){
        try{
            const {data,error}=await supabase.from("information").insert({
                cityName:cityNameSv,
                img:imgLink,
                country:countryNameSv,
                countryImg:flagLink,
                price:ticketPrice,
                cityNameEng:cityNameEn,
                countryEng:countryNameEn

            }).single()
            if(error) throw error
            window.location.reload()
        }catch (error){
            console.log("error")
        }
    
    }
   
    

  return (
    <div >
        <ModeNav/>
            <div className="adminPanel_div">
                <div className="adminpanel_infoAdd">
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
                    <button onClick={()=>createInfo()} className='adminPanel_btn'>
                        {myLangData.adminPanel.adminPanelBtn}
                    </button>
                </div>
                <div className="adminpanel_infoCrud tures_info-map">
                    {info.map((newInfo)=>{
                        return <Info newInfo={newInfo}/>
                     })}
                </div>
            </div>

        <Footer/>    
    </div>
  )
}

export default AdminPanel