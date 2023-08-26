import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import { supabase } from '../supabase';
import Navbar from './Navbar';
import Footer from "./Footer"
import {BsArrowLeftRight,BsFillPersonPlusFill,BsPersonDashFill} from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux';
import { minus, pilus } from '../toolkit/heart';

const Detail = () => {
  
    const {id} = useParams()
        const [info, setInfo] = useState([]);
        const [testGedis,setTestGedis]=useState()
        const[testGelis,setTestGelis]=useState()
        
        const [test,setTest] =useState(false)
        const value=useSelector((e)=>e.name.value)
        const [valuePush,setValuePush]=useState(value)
        const dispatch=useDispatch()

        useEffect(() => {
            getData();
          }, []);
        console.log(test)
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
    setInfo(info.map((e)=>{
      if(d.id===e.id){
        
        dispatch(minus())
      }
      return e
    }))
    setTest(true)
    }

    async function sellBtn(d){
      const {data,error}=await supabase.from("information").update({
        ticket:value,
        sellPrice:d.price*value
      }).eq("id",d.id) 
      alert(`${info.cityName} alindi`)
      window.location.reload()
    }

 async function artimFunc(d){ 
  setInfo(info.map((e)=>{
    if(d.id===e.id){
      
      dispatch(pilus())
    }
    return e
  }))
  setTest(true)
  }

  async function GedisGelis(d){
    const {data,error}=await supabase.from("information").update({
      gedis:testGedis,
      gelis:testGelis,
    }).eq("id",d.id) 
  }     
      return (
        <div>
            <Navbar/>
            {info.map((e)=>{
                if(e.id==id){
                   return <div key={e.id} className='detail_map'>
                        <div className="detail_img-div">
                            <img className="detail_img"  src={e.img} alt="" />
                        </div>
                        <div className="detail_sell">
                            <div className="detail_sell-infomation">
                                <h1 className='detail_sell-name'>{e.cityName}</h1>
                                <p className='detail_sell-text'>{e.text}</p>
                                <p className='detail_sell-price'>{e.price}&euro;</p>
                            </div>
                            
                              <form className='detail_form'>
                                <div className="date">
                                  <label className='date_label' >Flyg datum</label>
                                  <input onChange={(e)=>setTestGedis(e.target.value)} type="date"  className='date_input' />
                                </div>
                                <BsArrowLeftRight className='date_icons'/>
                                <div className="date">
                                  <label className='date_label'>Återlämningsdatum</label>
                                  <input onChange={(e)=>setTestGelis(e.target.value)} type="date" className='date_input' />
                                </div>
                              </form>
                            
                            <div className='person_number-div'>
                              <button onClick={()=>azalmaFunc(e)} className='person_number-btn'><BsPersonDashFill className='person_number-icons'/></button>
                              <span className='person_number'>{value}</span>
                              <button onClick={()=>artimFunc(e) }className='person_number-btn'><BsFillPersonPlusFill className='person_number-icons'/></button>
                            </div>

                            <button className='detail_btn' onClick={()=>(online(),sellBtn(e),GedisGelis(e))}>Köpa</button>
                        </div>

                    </div>
                }
            })}

            <Footer/>
        </div>
      )
    
    
}

export default Detail