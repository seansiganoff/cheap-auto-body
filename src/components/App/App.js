
import './App.css';
import Home from '../Home/home'
import Nav from '../Nav/nav';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Photos from '../Photos/Photos';
import OurGuarantee from '../OurGuarantee/OurGuarantee';
import GoogleReviews from '../GoogleReviews/GoogleReviews';
import { useState } from 'react';
import QuickQuote from '../QuickQuote/QuickQuote';

function App() {
  const [closeReviews, setcloseReviews] = useState(true);

  const onCloseReviewsTab = () => {
    setcloseReviews(!closeReviews);
  }

  return (
    <div className="App">
      <Nav />
      {closeReviews && <GoogleReviews close={onCloseReviewsTab}/>}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/photos' element={<Photos />} />
        <Route path='/quick-quote' element={<QuickQuote />} />
        <Route path='/lifetime-warranty' element={<OurGuarantee />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
