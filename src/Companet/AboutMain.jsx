import { useEffect, useState } from "react";
import React from "react";
import { supabase } from "../supabase";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Slide } from "react-awesome-reveal";
import langMode from "../LangMode";

const AboutMain = () => {
  const [myLangData,setMyLangData]=useState(localStorage.getItem("langMode")=="sv"?langMode.sv:langMode.en)

  return (
    <div className="about_main">
      <div className="flag_div-none">
        <div className="flag-none">
        <Slide >
          <h1 className="about_main-flag_name">{myLangData.aboutMain.country1}</h1>
          <div className="about_main-flag_div">   
            <img
              className="about_main-flag_img"
              src="aboutCity/Austria.jpg"
              alt=""
            />
          </div>
          <div className="flag_text">
            <p className="about_main-flag-text">
             {myLangData.aboutMain.countryText1}
            </p>

            <a
              className="about_main-link-wikipedia"
              href="https://sv.wikipedia.org/wiki/Austria"
              target="_blank"
            >
              {myLangData.aboutMain.aboutBtn} <AiOutlineArrowRight className="about_link-icons" />
            </a>
          </div>
        </Slide>
        </div>
        <div className="flag-none">
        <Slide className="">
          <h1 className="about_main-flag_name">{myLangData.aboutMain.country2}</h1>
          <div className="about_main-flag_div">
          
            <img
              className="about_main-flag_img"
              src="aboutCity/Denmark.jpg"
              alt=""
            />
          </div>
        
          <div className="flag_text">
            <p className="about_main-flag-text">
              {myLangData.aboutMain.countryText2}
            </p>
            <a
              className="about_main-link-wikipedia"
              href="https://sv.wikipedia.org/wiki/Denmark"
              target="_blank"
            >
              {myLangData.aboutMain.aboutBtn} <AiOutlineArrowRight className="about_link-icons" />
            </a>
          </div>
        </Slide>
      </div>
      <div className="flag-none">
        <Slide >
          <h1 className="about_main-flag_name">{myLangData.aboutMain.country3}</h1>
          <div className="about_main-flag_div">
          
            <img
              className="about_main-flag_img"
              src="aboutCity/Germany.jpg"
              alt=""
            />
          </div>
          <div className="flag_text">
            
            <p className="about_main-flag-text">
            {myLangData.aboutMain.countryText3}
            </p>
            <a
              className="about_main-link-wikipedia"
              href="https://sv.wikipedia.org/wiki/Germany"
              target="_blank"
            >
              {myLangData.aboutMain.aboutBtn} <AiOutlineArrowRight className="about_link-icons" />
            </a>
          </div>
        </Slide>
      </div>
      <div className="flag-none">
        <Slide >
        <h1 className="about_main-flag_name">{myLangData.aboutMain.country4}</h1>
          <div className="about_main-flag_div">
            <img
              className="about_main-flag_img"
              src="aboutCity/Sweden.jpg"
              alt=""
            />
          </div>
       
        
          <div className="flag_text">
            <p className="about_main-flag-text">
              {myLangData.aboutMain.countryText4}
            </p>
            <a
              className="about_main-link-wikipedia"
              href="https://sv.wikipedia.org/wiki/Sverige"
              target="_blank"
            >
              {myLangData.aboutMain.aboutBtn} <AiOutlineArrowRight className="about_link-icons" />
            </a>
          </div>
        </Slide>
      </div>
      </div>


      <div className="flag">
        <Slide className="slide_flag-img">
          <div className="about_main-flag_div">
            <img
              className="about_main-flag_img"
              src="aboutCity/Austria.jpg"
              alt=""
            />
          </div>
        </Slide>

        <Slide direction='right' className="slide_flag-text">
          <div className="flag_text">
            <h1 className="about_main-flag_name">{myLangData.aboutMain.country1}</h1>
            <p className="about_main-flag-text">
             {myLangData.aboutMain.countryText1}
            </p>

            <a
              className="about_main-link-wikipedia"
              href="https://sv.wikipedia.org/wiki/Austria"
              target="_blank"
            >
              {myLangData.aboutMain.aboutBtn} <AiOutlineArrowRight className="about_link-icons" />
            </a>
          </div>
        </Slide>
      </div>
      <div className="flag">
        <Slide className="slide_flag-img">
          <div className="about_main-flag_div">
            <img
              className="about_main-flag_img"
              src="aboutCity/Denmark.jpg"
              alt=""
            />
          </div>
        </Slide>
        <Slide direction='right' className="slide_flag-text">
          <div className="flag_text">
            <h1 className="about_main-flag_name">{myLangData.aboutMain.country2}</h1>
            <p className="about_main-flag-text">
              {myLangData.aboutMain.countryText2}
            </p>
            <a
              className="about_main-link-wikipedia"
              href="https://sv.wikipedia.org/wiki/Denmark"
              target="_blank"
            >
              {myLangData.aboutMain.aboutBtn} <AiOutlineArrowRight className="about_link-icons" />
            </a>
          </div>
        </Slide>
      </div>
      <div className="flag">
        <Slide className="slide_flag-img">
          <div className="about_main-flag_div">
            <img
              className="about_main-flag_img"
              src="aboutCity/Germany.jpg"
              alt=""
            />
          </div>
        </Slide>
        <Slide direction='right' className="slide_flag-text">
          <div className="flag_text">
            <h1 className="about_main-flag_name">{myLangData.aboutMain.country3}</h1>
            <p className="about_main-flag-text">
            {myLangData.aboutMain.countryText3}
            </p>
            <a
              className="about_main-link-wikipedia"
              href="https://sv.wikipedia.org/wiki/Germany"
              target="_blank"
            >
              {myLangData.aboutMain.aboutBtn} <AiOutlineArrowRight className="about_link-icons" />
            </a>
          </div>
        </Slide>
      </div>
      <div className="flag">
        <Slide className="slide_flag-img">
          <div className="about_main-flag_div">
            <img
              className="about_main-flag_img"
              src="aboutCity/Sweden.jpg"
              alt=""
            />
          </div>
        </Slide>
        <Slide direction='right' className="slide_flag-text">
          <div className="flag_text">
            <h1 className="about_main-flag_name">{myLangData.aboutMain.country4}</h1>
            <p className="about_main-flag-text">
              {myLangData.aboutMain.countryText4}
            </p>
            <a
              className="about_main-link-wikipedia"
              href="https://sv.wikipedia.org/wiki/Sverige"
              target="_blank"
            >
              {myLangData.aboutMain.aboutBtn} <AiOutlineArrowRight className="about_link-icons" />
            </a>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default AboutMain;
