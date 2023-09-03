import React, { useState,useEffect } from 'react'
import { supabase } from '../supabase';
import { useDispatch, useSelector } from 'react-redux';
import {IoMdPerson} from "react-icons/io"
import {BsArrowLeftRight} from "react-icons/bs"
import {Slide} from "react-awesome-reveal"

const SellCart = () => {
    const [info,setInfo]=useState([])
    const [offline,setOffline]=useState([])
    const value=useSelector((e)=>e.name.value)
    const dispatch=useDispatch()
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
        async function zeroInfo(d){
          const {data,error}=await supabase.from("information").update({
            ticket:0,
            sellPrice:0,
            gedis:null,
            gelis:null,
            offline:false
          }).eq("id",d.id) 
          setInfo(info.map((e)=>{
            if(d.id===e.id){
              return {...e,ticket:0,sellPrice:0,gedis:null,gelis:null,offline:false}
            }
            return e  
          })
          )
          alert( `tack`)
        }
    
  return (
    <div className='sellCart_div'>
      {filter.length===0?<h1 className='filter_not-favorite'>Det finns inget på kortet</h1>:filter.map((e)=>{ 
        return<Slide>
        <div className='sellCart'>
          <img className='sellCart-img' src={e.img} alt="" />
          <div className="sellCart_info">
            <div className="sellCart_info-box">
              <h1 className='sell_cart-header'>{e.cityName}</h1>
              <h1 className='sell_cart-header_ticket'>{e.ticket } <div className="sell_cart-header_icons-div">
                <IoMdPerson className="sell_cart-header_icons"/>
                </div></h1>

            </div>
            <div className="sellCart_info-box">
              <p className='sellCart_info-gedisgelis'>{e.gedis}</p>
              <BsArrowLeftRight className='gedisGelis_icons'/>
              <p className='sellCart_info-gedisgelis'>{e.gelis}</p>
            </div>

            <div className="sellCart_info-box">
              <p className='sell_cart-price'>{e.sellPrice}&euro;</p>
            </div>
            
            <div className="sellCart_info-div_btn">
              <button onClick={()=>zeroInfo(e)} className='sellCart_info-btn'>att betala</button>
            </div>
          </div>
        </div>
        </Slide>
      })}

    </div>
  )
}

export default SellCart