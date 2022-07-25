// import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
// import "./Men.css"
import {Men} from".//Men"
// import { Navbar } from "../landing-page/components/Navbar";
// import { Footer } from "../landing-page/components/Footer";


export function Menswatch() {
  const [item,setItem] = useState([])
  
useEffect(() => {
    getdata();
  },[]);

  

  const getdata = async () => {
    const data = await fetch("https://horsemanbackend.herokuapp.com/menwatch").then((d) => d.json());
    console.log(data)
    setItem(data)
  };
  return (
    <div className="App">
       <div id="top-text">
        <h6>TECH, HOME AND TRAVEL</h6>
        <h4>Beautiful accessories designed to hold your tech.</h4>
       </div>
      
      <div id="box">
        
        {item.map((e) => {
          return (
            <div>
              <Men
              
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
