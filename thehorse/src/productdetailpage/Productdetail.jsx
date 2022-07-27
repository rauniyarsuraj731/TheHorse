// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "./ProductPage";

export function Productdetailpage(id) {
  const [item, setItem] = useState([]);

  useEffect((id) => {
    getdata(id);
  }, []);

  const getdata = async (id) => {
    const data = await fetch(
      `https://horseallproduct.herokuapp.com/allproduct/${id}`
    ).then((d) => d.json());
    // console.log(data)
    setItem(data);
  };
  return (
    <div className="App">
      <div id="box">
        {item.map((e) => {
          return (
            <div>
              <Product
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
