import React from 'react'
import {MdOutlineDoneOutline} from "react-icons/md"
import langMode from '../LangMode';
import { useState } from 'react'; 
const ThankYou = () => {
    const [myLangData,setMyLangData]=useState(localStorage.getItem("langMode")=="sv"?langMode.sv:langMode.en)

  return (
    <div className='thankyou_jsx-div'>
        <MdOutlineDoneOutline className='thankYou_icons'/> <h1 className='thankYou_header'>{myLangData.sellCart.sellCartThankYou}</h1>
    </div>
  )
}

export default ThankYou