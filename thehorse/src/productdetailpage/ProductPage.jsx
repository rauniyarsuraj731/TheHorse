export const Product = ({image,title,color,price})=>{
    return (
        
        <div className = "card">
           
            <div id = "img_div">
               <img id = "image" src={image}  alt="" />
            </div>
            <div id="desc_price">
            <div id = "desc">{title}</div>
            <div id = "price">${price}</div>
            </div>
            <div id="color">{color}</div>
            
       </div>
        
  )
}