import "./Footer.css";

export const Footer = () => {
  return (
    <div id="footer-div">
      <div>
        <h3>Join the Horse Club and get 10% off your first purchase</h3>
        <input
          type="email"
          name=""
          id="footer_email"
          placeholder="Email                               ➞"
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0233/5133/files/Group_1317_1_140x.png?v=1647570728"
          alt=""
        />
        <p>© The Horse '22</p>
      </div>
      <div id="footer-features">
        <div>
          <h3>Customer Care</h3>
          <p>FAQs</p>
          <p>Contact Us</p>
          <p>Shipping & Delivery</p>
          <p>Return & Exchange</p>
          <p>Acknowledgment of Country</p>
          <p>Corporate Gifting</p>
        </div>
        <div>
          <h3>Information</h3>
          <p>Our Story</p>
          <p>Careers</p>
          <p>Terms / Privacy</p>
          <p>Sitemap</p>
        </div>
        <div>
          <h3>Social</h3>
          <div className="me-5">
            <i className="fa-brands fa-instagram insta p-1"></i>
            <p>Instagram</p>
          </div>
          <div className="me-5">
            <i className="fa-brands fa-facebook "></i>
            <p>Facebook</p>
          </div>
          <div className="me-5">
            <i class="fa fa-pinterest-p" aria-hidden="true"></i>
            <p>Pinterest</p>
          </div>
          <div className="me-5">
            <i class="fa fa-vimeo" aria-hidden="true"></i>
            <p>Vimeo</p>
          </div>
        </div>
      </div>
    </div>
  );
};
