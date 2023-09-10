import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { supabase } from "../supabase";
import langMode from '../LangMode';
import { useNavigate } from "react-router-dom";

const Reviews = () => {
    const [info, setInfo] = useState([]);
    const [index, setIndex] = useState(0);
    const [myLangData,setMyLangData]=useState(localStorage.getItem("langMode")=="sv"?langMode.sv:langMode.en)

    const navigate=useNavigate()
    useEffect(() => {
        getData();
        const lastIndex = info.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
      }, [index, info]);

      useEffect(() => {
        let slider = setInterval(() => {
          setIndex(index + 1);
        }, 3000);
        return () => clearInterval(slider);
      }, [index]);

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
    
      return (
        <section className="section">
          <div className="title">
            <h2 className="reviews_header">
              <span>/</span>{myLangData.reviews.reviewsHeader}
            </h2>
          </div>
          <div className="section-center">
            {info.map((info, personIndex) => {
              const { id, img, cityName, cityNameEng ,country,countryEng} = info;
              let position = "nextSlide";
              if (personIndex === index) {
                position = "activeSlide";
              }
              if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === info.length - 1)
              ) {
                position = "lastSlide";
              }
              return (
                <article key={id} className={position}>
                  <img src={img}  className="person-img" />
                  <h1 className="reviews_country" >{localStorage.getItem("langMode")=="sv"?country:countryEng}</h1>
                  <p  className="title">{localStorage.getItem("langMode")=="sv"?cityName:cityNameEng}</p>
                  <button className="tures_cart-btn reviews_btn" onClick={() => navigate(`/card/detail/${id}`)}>{myLangData.tures.turesBtn}</button>
                </article>
              );
            })}
            <button className="prev" onClick={() => setIndex(index - 1)}>
              <FiChevronLeft className="reviews-icons" />
            </button>
            <button className="next" onClick={() => setIndex(index + 1)}>
              <FiChevronRight className="reviews-icons" />
            </button>
          </div>
        </section>
      );
}

export default Reviews