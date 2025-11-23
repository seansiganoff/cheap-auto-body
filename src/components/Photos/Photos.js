import React from 'react';
import './Photos.css';

const Photos = () => {



  return (
    <div className='photos-container'>
        <h2 className='photo-gallery-banner'>GALLERY</h2>

        <div className="video-wrapper">
            <h3 >2023 BMW X5</h3>
            <p >Repair and paint scratches in front fender and corner bumper.</p>
            <video controls muted poster={require("../../images/black-bmw-x5-screenshot.png")}>
            <source className="video" src={require("../../videos/bmw-x5-fender.mp4")} type="video/mp4" />
            </video>
        </div>

        <hr />
        
        <div className="video-wrapper">
            <h3 >2023 PORSCHE MACAN</h3>
            <p >Fix and paint dents on passenger side rear door and panel.</p>
            <video controls poster={require('../../images/porsche-macan-screenshot.png')}>
            <source className="video" src={require('../../videos/porsche-macan.mp4')} type="video/mp4" />
            </video>
        </div>
          <hr />


        <div className="video-wrapper">
            <h3 >2022 Tesla Model 3</h3>
            <p >Repair and paint dent in rear door and blend into panel.</p>
            <video controls muted poster={require("../../images/tesla model 3 screenshot.png")}>
            <source className="video" src={require("../../videos/tesla model 3.mp4")} type="video/mp4" />
            </video>
        </div>

        <hr />


      <div className="video-wrapper">
          <h3>2023 TESLA MODEL X</h3>
          <p >Fix and paint passenger side.</p>
          <video controls poster={require('../../images/red-tesla-model-x-screenshot.png')}>
          <source className="video" src={require('../../videos/2023 red tesla model x.mp4')} type="video/mp4" />
          </video>
      </div>
          
          <hr />

          <div className="video-wrapper">
          <h3>2021 NISSAN VERSA</h3>
          <p >Replace and paint the rear bumper.</p>
          <video controls poster={require('../../images/nissan-bumper-screenshot.png')}>
          <source className="video" src={require('../../videos/nissan-versa.mp4')} type="video/mp4" />
          </video>
      </div>
          

            
            <hr />

          <div className="video-wrapper">
          <h3>2021 Chrysler Pacifica</h3>
          <p >Repair and paint 2 doors.</p>
          <video controls poster={require('../../images/chrysler pacifica.png')}>
          <source className="video" src={require('../../videos/Chrysler Pacifica.mp4')} type="video/mp4" />
          </video>
      </div>
            
            
            
            <hr />
            
            <div className="video-wrapper">
                <h3>2021 BENTLEY GT MULLINER</h3>
                <p>Align front bumper and replace the clips.</p>
                <video controls muted poster={require("../../images/bentley-bumper-screenshot.png")}>
                <source className="video" src={require("../../videos/bentley-gtc-bumper-align.mp4")} type="video/mp4" />
                </video>
            </div>
            <hr />
            
            

            <div className="video-wrapper">
                <h3 >2023 ACURA MDX</h3>
                <p >Repair and paint dents and scratches on the side panel.</p>
                <video controls muted poster={require("../../images/acura-mdx-side-screenshot.png")}>
                <source className="video" src={require("../../videos/acura-mdx-paint-side.mp4")} type="video/mp4" />
                </video>
            </div>
            <hr />
            
            
            <div className="video-wrapper">
                <h3 >2022 RANGE ROVER</h3>
                <p >Repair scratches and paint the doors.</p>
                <video controls muted poster={require("../../images/black-range-rover-screenshot.png")}>
                <source className="video" src={require("../../videos/range-rover-doors.mp4")} type="video/mp4" />
                </video>
            </div>

            <hr />

            <div className="video-wrapper">
                <h3 >2019 FORD</h3>
                <p >Repair and paint dents and scratches on the side panel and door.</p>
                <video controls muted poster={require("../../images/ford-screenshot.png")}>
                <source className="video" src={require("../../videos/ford-panel.mp4")} type="video/mp4" />
                </video>
            </div>
            
            
            
    </div>
  )
}

export default Photos