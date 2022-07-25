// import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import "./Women.css"
import {Women} from".//Women"
// import { Navbar } from "../landing-page/components/Navbar";
// import { Footer } from "../landing-page/components/Footer";


export function Womenpage() {
  const [item,setItem] = useState([])
  
useEffect(() => {
    getdata();
  },[]);

  

  const getdata = async () => {
    const data = await fetch("https://horsebag.herokuapp.com/horsewomen").then((d) => d.json());
    console.log(data)
    setItem(data)
  };
  return (
    <div className="App">
       <div id="top-text">
        <h6>WOMEN'S BAG</h6>
        <h4>A collection of bags made specifically for work, travel and play. To take you day-to-night and week-to-weekend. Our range is designed to complement the Australian lifestyle, with bags as versatile and functional as they are stylish.</h4>
       </div>
      
      <div id="box">
        
        {item.map((e) => {
          return (
            <div>
              <Women
              
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