import React from 'react'
import langMode from '../LangMode';
import { useState } from 'react'; 
const DetailThankYou = () => {
    const [myLangData,setMyLangData]=useState(localStorage.getItem("langMode")=="sv"?langMode.sv:langMode.en)
  return (
    <div className='thankyou_jsx-div'>
     <h1 className='thankYou_header'>{myLangData.detail.detailThankYou}</h1>
    </div>
  )
}

export default DetailThankYou