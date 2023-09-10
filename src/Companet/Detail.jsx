import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import { supabase } from '../supabase';
import Navbar from './Navbar';
import Footer from "./Footer"
import {BsArrowLeftRight,BsFillPersonPlusFill,BsPersonDashFill} from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux';
import { minus, pilus } from '../toolkit/heart';
import ModeNav from './ModeNav';
import langMode from '../LangMode';
import DetailThankYou from './DetailThankYou';
import Reviews from './Reviews';
const Detail = () => {
  
    const {id} = useParams()
        const [info, setInfo] = useState([]);
        const [testGedis,setTestGedis]=useState()
        const [mesaj,setMesaj]=useState(false)
        const[testGelis,setTestGelis]=useState(true)
        const [test,setTest] =useState(false)
        const value=useSelector((e)=>e.name.value)
        const [thankyou,setThankyou]=useState(true)

        const [myLangData,setMyLangData]=useState(localStorage.getItem("langMode")=="sv"?langMode.sv:langMode.en)


        const dispatch=useDispatch()
        useEffect(() => {
            getData();
            getDatas()
          }, []);
        console.log(test)
      
         const [inpInfo,setInpInfo]=useState([])
      
          console.log(inpInfo)
          
            async function getDatas() {
              try {
                const { data, error } = await supabase
                  .from("Login")
                  .select("*")
                  .limit(30);
                if (error) throw error;
                if (data != null) {
                  setInpInfo(data);
                }
              } catch (error) {
                console.log("q");
              }
            } 
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


  async function azalmaFunc(d){ 
    if(id==d.id){
      setInfo(info.map((e)=>{
      if(d.id===e.id){
        
        dispatch(minus())
      }
      return e
    }))
    }
    
    setTest(true)
    }

    async function sellBtn(d){
      
         const {data,error}=await supabase.from("information").update({
        ticket:value,
        sellPrice:d.price*value
      }).eq("id",d.id) 
      
    }

 async function artimFunc(d){ 
  if(d.id==id){
     setInfo(info.map((e)=>{
    if(d.id==e.id){  
      dispatch(pilus())
    }
    return e
  }))
  }
 
  setTest(true)
  }

  async function GedisGelis(d){
        const {data,error}=await supabase.from("information").update({
      gedis:testGedis,
      gelis:testGelis,
    }).eq("id",d.id) 
    

  }   
  const thankYouFunc=()=>{
    setThankyou(false)
  }
 setTimeout(()=>{
      setThankyou(true)
    },7000)
    const inpInfoFilter=inpInfo.filter((e)=>{
      if(e.qeydiyyat===true){
        return info
      }
})
      return (
        <div>
            <ModeNav inpInfo={inpInfo}/>
            <div className={thankyou==true?"thankyou":"thankyou_blok"}>
              <DetailThankYou/>
            </div> 
            {
               info.map((e)=>{
                if(e.id==id){
                 return <div key={e.id} className='detail_map'>
                        <div className="detail_img-div">
                            <img className="detail_img"  src={e.img} alt="" />
                        </div>
                        <div className="detail_sell">
                            <div className="detail_sell-infomation">
                                <h1 className='detail_sell-name'>{localStorage.getItem("langMode")=="sv"?e.cityName:e.cityNameEng}</h1>
                                <p className='detail_sell-text'>{e.text}</p>
                                <p className='detail_sell-price'>{e.price}&euro;</p>
                            </div>
                            
                              <form className='detail_form'>
                                <div className="date">
                                  <label className='date_label' >{myLangData.detail.gedis}</label>
                                  <input onChange={(e)=>setTestGedis(e.target.value)} type="date"  className='date_input' />
                                </div>
                                <BsArrowLeftRight className='date_icons'/>
                                <div className="date">
                                  <label className='date_label'>{myLangData.detail.gelis}</label>
                                  <input onChange={(e)=>setTestGelis(e.target.value)} type="date" className='date_input' />
                                </div>
                              </form>
                            
                            <div className='person_number-div'>
                              <button onClick={()=>azalmaFunc(e)} className='person_number-btn'><BsPersonDashFill className='person_number-icons'/></button>
                              <span className='person_number'>{value}</span>
                              <button onClick={()=>artimFunc(e) }className='person_number-btn'><BsFillPersonPlusFill className='person_number-icons'/></button>
                            </div>

                            <button className='detail_btn' onClick={()=>(online(),sellBtn(e),GedisGelis(e),thankYouFunc())}>{myLangData.detail.detailBtn}</button>
                        </div>

                    </div>
                }
            }) 
                      
            }
            <Reviews/>
              <Footer/>
        </div>
      )
    
    
}

export default Detail

