import React from 'react';
import './Why.css';

const Why = () => {
  return (
    <div className="why-container ">
        <div className="why-header">
            WHY CHOOSE MOBILE DENT AND SCRATCH REPAIR?
        </div>
            
        <div className="why-icon-container">
            <div className="why-inner-container">
                <img className="why-img" src={require('../../images/calendar-icon.png')} alt='Calendar icon'/>
                <h3>Same Day Service</h3>
            </div>
            <div className="why-inner-container">
                <img className="why-img" src={require("../../images/save-money-icon.png")} alt='Money bag icon'/>
                <h3>50% Less Than Shops</h3>
            </div>
            <div className="why-inner-container">
                <img className="why-img" src={require("../../images/rental-car.png")} alt='Car icon'/>
                <h3>No Rental Needed</h3>
            </div>
            <div className="why-inner-container">
                <img className="why-img" src={require("../../images/Carfax-Logo.jpg")} alt='Carfax icon'/>
                <h3>We Don't Report To Carfax</h3>
            </div>

            <div className="why-inner-container">
                <img className="why-img" src={require("../../images/satisfaction.png")} alt='Satisfaction icon'/>
                <h3>Satisfaction is Guaranteed</h3>
            </div>
        </div>
    </div>
    
  )
}

export default Why