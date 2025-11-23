import React from 'react';
import './QuickQuote.css';
import { Link } from 'react-router-dom';

const QuickQuote = () => {
  return (
    <div>
        <div className='quick-quote-container'>
            <div className='quick-quote-banner'>Quick Quote</div>
            
            <h4>For a quick quote, please follow these 3 simple steps:</h4>
              <br />
              <br />
              <p>
             <b> STEP 1. </b>  Via text message: Send us the vehicles year, make and model, and send some pictures or a video of the damage you need repaired, to <a href="sms:469-367-2877">469-367-2877.</a> 
              <br /><br />
              <b> STEP 2. </b>  Wait for a quote. You should receive one in less than 30 minutes.

              <br /><br />
              <b> STEP 3. </b>  If you are satisfied with the quote and want to proceed with the repairs, let us know and we will schedule a date and time that works for you.
            </p>
            <h4>Remember, our work comes with a 100% satisfaction guarantee and a Lifetime Warranty.</h4><Link to={'/lifetime-warranty'}><button className="guaranteeBtn">CLICK HERE TO LEARN MORE!</button></Link>
  
        </div>
    </div>
  )
}

export default QuickQuote