import "./Navbar.css";
import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <div id="navDiv">
      <div id="gen_options">
      <i class="fa fa-bars" aria-hidden="true"></i>
        <Link to="/women">Women</Link>
        <Link to="/men">Men</Link>
      </div>
      <div>
        <h3>THEHORSE</h3>
      </div>
      <div className="diff-sym">
        <Link to="/signup">
         My Account
        </Link>
        <i class="fa-regular fa-heart user ms-4"></i>
        <i class="fa fa-search" aria-hidden="true"></i>
        <i class="fa fa-shopping-bag"  style={{ backgroundcolor: "White" }}></i>
        {/* <i class="fas fa-shopping-cart ms-4" style={{ color: "Black" }}></i> */}
      </div>
    </div>
  );
};
