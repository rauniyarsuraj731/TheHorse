// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import { Productdetailpage } from "../productdetailpage/Productdetail";
import "./Women.css";

import Womenwallet from "./Womenwallet";

export function Womenwalletpage() {
  const [item, setItem] = useState([]);


  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const data = await fetch(
      "https://horsewomenwallet.herokuapp.com/womenwallet"
    ).then((d) => d.json());

    setItem(data);
    
  };
  return (
    <div className="App">
      <div id="top-text">
        <h6>WOMEN'S BAG</h6>
        <h4>
          A collection of bags made specifically for work, travel and play. To
          take you day-to-night and week-to-weekend. Our range is designed to
          complement the Australian lifestyle, with bags as versatile and
          functional as they are stylish.
        </h4>
      </div>

      <div
        id="box"
       
      >
        {item.map((e) => {
          return (
            <div>
              
              <Womenwallet
                image={e.image}
                title={e.title}
                color={e.color}
                price={e.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
