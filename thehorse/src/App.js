import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/HomePage/components/Navbar.jsx";
import { Landingpage } from "./LandingPage";
import Signup from "./authentication/singup";
import { Womenpage } from "./women/Womenpage";
import { Menstravel } from "./men/Mensmain";
import { Popup } from "./pop-up/Pop-up";
import { Womenwalletpage } from "./women/Women_wallet";
import { Menswatch } from "./men/Menwatch";
import { Footer } from "./components/HomePage/components/Footer";
import { Productdetailpage } from "./productdetailpage/Productdetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/women" element={<Popup />}></Route>
        <Route path="/men" element={<Popup />}></Route>
        <Route path="/bag" element={<Womenpage/>}></Route>
        <Route path="/wallet" element={<Womenwalletpage/>}></Route>
        <Route path="/tech_travels" element={<Menstravel/>}></Route>
        <Route path="/watches" element={<Menswatch/>}></Route>
        <Route path="/products" element={<Productdetailpage/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
