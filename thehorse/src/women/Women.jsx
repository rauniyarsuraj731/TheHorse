import "./Women.css"
// import {Link} from 'react-router-dom'
export const Women = ({image,title,color,price})=>{
    return (
        
        <div className = "card" >
           
            <div id = "img_div "  onClick={() => {
            <Link to="/products">
              {
                // click.map((el)=>{
                //   return (
                //     <div>
                //       { console.log("clicked")}
                //       <Productdetailpage id = {el._id}/>
                //     </div>
                //   )
                // })
              }
            </Link>;
            console.log("I m clicked");
          }}>
               <img id = "image" src={image}  alt=""  />
            </div>
            <div id="desc_price">
            <div id = "desc">{title}</div>
            <div id = "price">${price}</div>
            </div>
            <div id="color">{color}</div>
            
       </div>
        
  )
}