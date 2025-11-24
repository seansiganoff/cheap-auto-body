import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <div className="footer">
            <div className="footer-overlay" id="contact-us">
                <div className="contact-us">
                    <h3 className='theme-color'>CONTACT US</h3>
                    <div className="contact-container">
                        <div className="mobile-footer">
                            <a href="sms:469-969-5119"><img className="my-icons" src={require("../../images/text-icon.png")} alt='SMS message icon'/></a>
                            <a href="tel:469-969-5119"><img className="my-icons" src={require("../../images/phone-icon.png")} alt='Phone icon'/></a>
                            {/* <a href="mailto:mobiledentandscratchrepair@yahoo.com"><img className="my-icons" src={require("../../images/email-icon.webp")} alt='Email icon'/></a> */}
                        </div>
                        <div className="desktop-footer">
                        <p>CALL OR TEXT:  <b>469-969-5119</b></p>
                        </div>
                    </div>
                </div>
                <div className="contact-us">
                    <h3 className='theme-color'>HOURS</h3>
                    <p>Monday - Saturday: 8AM - 8PM.</p>
                </div>
            </div>
        </div>
        
        <div className="copyright">
            CHEAP MOBILE AUTO BODY 2025 LLC.
        </div>
    </footer>
  )
}

export default Footer