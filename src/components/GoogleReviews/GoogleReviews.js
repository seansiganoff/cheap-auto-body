import React from 'react'
import './GoogleReviews.css';
import { motion } from 'framer-motion';


const GoogleReviews = ({close}) => {
  return (
    <div className='google-reviews'>
        <div className='google-reviews-img-div'>
        <div className='google-close-btn' onClick={() => close()}>X</div><br />
        
        <button>
            <a href='https://g.co/kgs/BveuWzP'>
                
                <motion.img
                className='google-img'
                animate={{
                  scale: [1, 1, 1, 1, 1],
                  rotate: [0, 0, 360],
                  borderRadius: ["0%", "0%", "0%", "0%", "0%"]
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 2
                }}src={require('../../images/google-reviews.png')} />
                </a>
        </button>
        </div>
    </div>
  )


}

export default GoogleReviews