import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ImageCarousel.css'



const ImageCarousel = () => {


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1224, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 664, min: 0 },
          items: 1
        }
      };


  return (
    <div className='carousel-section'>
      <div className='carousel-container'>
      <h3>2014 Mercedes ML 350</h3>
            <p>Crease dent in rear door and panel</p>
        <div className='carousel-text'>
        </div>
        <Carousel responsive={responsive}>
          <div className='carousel-card'>
            <div className='carousel-image-container'>
              <img src={require('../../images/mercedes-ml-crease-before.jpg')} className="carousel-image"  alt='Mercedes'/> 
            </div>
            
          </div>
          
          <div className='carousel-card'>
            <div className='carousel-image-container'>
              <img src={require('../../images/mercedes-ml-crease-primer.jpg')} className="carousel-image" alt='Mercedes'/>
              
            </div>
            
          </div>
          <div className='carousel-card'>
            <div className='carousel-image-container'>
              <img src={require('../../images/mercedes-ml-crease-paint.jpg')} className="carousel-image" alt='Mercedes' />
              
            </div> 
            
          </div>
          <div className='carousel-card'>
            <div className='carousel-image-container'>
              <img src={require('../../images/mercedes-ml-crease-finish1.jpg')} className="carousel-image" alt='Mercedes'/> 
              
            </div>
            
          </div>
          <div className='carousel-card'>
            <div className='carousel-image-container'>
              <img src={require('../../images/mercedes-ml-crease-finish2.jpg')} className="carousel-image" alt='Mercedes'/> 
              
            </div>
          </div>
          
        </Carousel>
      </div>
    </div>
  )
}

export default ImageCarousel