import React from 'react';
import './MainVideo.css';


const MainVideo = () => {
  return (
    <div className='main-video'>
        {/* <h2>Check Out Some Of Our Work!</h2> */}
        <div className="gallery-video-wrapper">
        
            <video controls poster={require('../../images/porsche-macan-screenshot.png')}>
            <source className="gallery-video" src={require('../../videos/porsche-macan.mp4')} type="video/mp4" />
            </video>
            
        </div>
        {/* <Link to='/photos'>
        <button className='gallery-btn'>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h2>Photo Gallery</h2>
            <br />
            <span className="material-symbols-outlined gallery-icon">gallery_thumbnail</span><br />
          </div>
          <p className='main-video-click-here'>CLICK HERE FOR MORE VIDEOS</p>
        </button>
        
        </Link> */}
    </div>
    
  )
}

export default MainVideo