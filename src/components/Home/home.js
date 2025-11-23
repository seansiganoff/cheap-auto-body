import React from 'react'
import './home.css';
import About from '../About/About';
import MainVideo from '../MainVideo/MainVideo';



// import { motion } from 'framer-motion';

const Home = () => {

  //Animates the vehicle icons when the page loads.
  // const visible = { opacity: 1, x: 0, transition: { duration: 0.4 } };
  //   const itemVariants = {
  //     hidden: { opacity: 0, x: -710 },
  //     visible
  //   };


  

  return (
    
    <div className='header'>
      <div className='header-overlay'>
        <div className="vehicle-icons">
        {/* <motion.div 
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="vehicle-icons-inner-div-top" >
            
                <motion.img variants={itemVariants} src={require('../../images/tesla.png')} alt='Tesla logo'/>
                <motion.img variants={itemVariants} src={require('../../images/mercedes-icon.png')} alt='Mercedes logo'/>
                <motion.img variants={itemVariants} src={require('../../images/audi-icon.gif')} alt='Audi logo'/>
                <motion.img variants={itemVariants} src={require('../../images/porsche-icon.png')} alt='Porsche logo'/>
                <motion.img variants={itemVariants} src={require('../../images/bmw-icon.png')} alt='BMW logo'/>
                <motion.img variants={itemVariants} src={require('../../images/caddilic-icon.jpg')} alt='Cadillac logo'/>
            </motion.div> */}
        </div>
        <div className='home-container'>
          <img src={require('../../images/audi.jpg')} className='home-background-audi' alt='Audi background' />
          <div className='home-text-top-left'>Dent & Scratch Repair Services, At Your Home, Office Or Apartment!<br /><br />
            <p className='home-p'>Professional Results.<br /> Cheap Prices!</p>
          </div>
          
          <div className="home-locations-bottom"><b style={{color: 'red'}}>SERVING:</b> Plano, Mckinney, Frisco, Allen, Lewisville, highland Park, Grapevine, Keller, Addison, The Colony, Arlington, Flower Mound, Farmers Branch, Fairview and Carrollton.</div>

        </div>
        
        
        <div className="vehicle-icons">
        {/* <motion.div 
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="vehicle-icons-inner-div-bottom" >
                <motion.img variants={itemVariants} src={require('../../images/toyota-icon.jpg')} alt='Toyota logo'/>
                <motion.img variants={itemVariants} src={require('../../images/lexus-icon.png')} alt='Lexus logo'/>
                <motion.img variants={itemVariants} src={require('../../images/jaguar-icon.jpg')} alt='Jaquar logo'/>
                <motion.img variants={itemVariants} src={require('../../images/chevy-icon.jpg')} alt='Infiniti logo'/>
                <motion.img variants={itemVariants} src={require('../../images/honda-icon.png')} alt='Honda logo'/>
                <motion.img variants={itemVariants} src={require('../../images/ford-icon.png')} alt='Lamborghini logo'/>
            </motion.div> */}
        </div>
        <br />
        </div>

        {<About />}
      {<MainVideo />}
      
    </div>
    
  )
}

export default Home