import React from 'react';
import './FAQ.css';
import { Link } from 'react-router-dom';







const FAQ = () => {

    


  return (
    <div className="faq-container" id="faq">
        <div className="faq-overlay">
            <div className="faq-header">FREQUENTLY ASKED QUESTIONS</div>
                <div className="faq ">
                    <div className="question-cards">
                        <h3 className='theme-color'><b>HOW DOES IT WORK?</b></h3>
                        <p>Give us a call or text us to setup a free estimate. 
                            Or, send us some picture's via text, and we will let you know what your options are and how much it will cost. 
                            If you want to proceed with the repairs, we will schedule a time and date that works for you and do the repairs right at your doorstep.</p>
                    </div>
                    <div className="question-cards">
                        <h3 className='theme-color'><b>WHAT IF I AM NOT SATISFIED WITH THE RESULTS?</b></h3>
                        <p>If you are not satisfied with the work upon completion, it's free! <br />

                            <br /><br />
                            <Link to={'/lifetime-warranty'}><button className="leaseBtn">CLICK HERE TO LEARN MORE!</button></Link>
                        </p>
                    </div>

                    <div className="question-cards">
                        <h3 className='theme-color'><b>CAN YOU COME TO MY HOUSE AND REPAIR MY VEHICLE?</b></h3>
                        <p>We are a mobile service. We will come to your house and repair your vehicle right in your driveway!</p>
                    </div>
                </div>
            <div className="question-cards-bottom ">
                <h3 className='theme-color'><b>HOW LONG WILL THE REPAIRS TAKE?</b></h3>
                <p>Most repairs are done the same day, in just a few hours!
                </p>
            </div>
            </div>
        </div>
    
  )
}

export default FAQ