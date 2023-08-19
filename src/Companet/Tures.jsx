import { useState, useEffect } from "react";
import React from "react";
import { supabase } from "../supabase";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Tures = () => {
  const [info, setInfo] = useState([]);
  const navigate=useNavigate()
 
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
  console.log(info);
  return (
    <div className="tures">
        <dir className="tures_info-map">
            {info.map((e) => {
        return (
          <div key={e.id} className="tures_cart">
            <div className="tures_cart-img_position">
              <img className="tures_cart-img" src={e.img} alt="" />
              <img
                className="tures_cart-country_flag"
                src={e.countryImg}
                alt=""
              />
            </div>
            <h1 className="tures_cart-name">{e.cityName}</h1>
            <p>{e.price}&euro;</p>
            <button onClick={() => navigate(`/card/detail/${e.id}`)}>köp en biljett</button>
          </div>
        );
            })}
      </dir>
    </div>
  );
};

export default Tures;
