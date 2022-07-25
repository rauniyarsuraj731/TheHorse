
import { useEffect,useState } from "react";
// import "./Men.css"
import {Men} from".//Men"



export function Menstravel() {
  const [item,setItem] = useState([])
  
useEffect(() => {
    getdata();
  },[]);

  

  const getdata = async () => {
    const data = await fetch("https://horsemanbackend.herokuapp.com/mentravel").then((d) => d.json());
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
