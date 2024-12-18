import React from 'react';
import Styles from './Footer.module.css'; // Import the CSS file
// import VisaLogo from"../../assets/WhatsApp Image 2024-12-14 at 16.14.48_2492e9db.png"; 
// import MastercardLogo from "../../Images/WhatsApp Image 2024-12-14 at 16.14.48_2492e9db.png";
// import AmexLogo from "../../assets/WhatsApp Image 2024-12-14 at 16.14.48_2492e9db.png";


const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footerContainer}>
        {/* Email Subscription */}
        <div className={Styles.footerSubscription}>
          <h3>Subscribe to our Newsletter</h3>
          <p>Write your email to stay updated with our latest news and offers:</p>
          <form className={Styles.footerForm}>
            <input 
              type="email" 
              placeholder="Write your email..." 
              className={Styles.footerInput}
              required
            />
            <button type="submit" className="btn-black">
              Subscribe
            </button>
          </form>
        </div>

        {/* Visa Icons and Text */}
        <div className={Styles.footerContent}>
          {/* Paragraphs */}
          

          {/* Visa Images */}
          {/* <div className={Styles.footerImages}>
            <div className=""><h4>We Accept:</h4> </div>
            
            <div className={Styles.imagesContainer}>
              <img src="" alt="Visa" className={Styles.footerImg} />
              <img src="" alt="MasterCard" className={Styles.footerImg} />
              <img src="" alt="American Express" className={Styles.footerImg} />
            </div>
          </div> */}
        </div>

        {/* Copyright */}
        <div className={Styles.footerCopyright}>
          <p>© 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
