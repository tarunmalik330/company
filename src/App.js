import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/Header';
import Help from './components/Help';
import OurProcess from './components/OurProcess';
import LeadingBrands from './components/LeadingBrands';
import FasterToday from './components/FasterToday';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';
import BackToTop from "./assets/images/png/BackToTop.png"
import Loader from './components/Loader';

function App() {
  // -------------------preloader------------------------
  document.getElementById('root')
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    document.body.classList.add("body-bg")
    setScreenLoading(true);
    setTimeout(() => {
      document.body.classList.remove("body-bg")
      setScreenLoading(false);
    }, 2500);
  }, []);
  // -----------------------Aos-------------------------
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200,
      }
    );
    Aos.refresh()
  });
  // ----------------backToTop----------------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <>
      {screenLoading ? (
        <Loader />
      ) : (
        <>
          <div className=' overflow-hidden'>
            <Header />
            <Help />
            <OurProcess />
            <LeadingBrands />
            <FasterToday />
            <Footer />
          </div>
          <div onClick={() => top()} className={backToTop ? "back_to_top" : "d-none"}>
            <img src={BackToTop} alt='BackToTop' />
          </div>
        </>
      )
      }
    </>
  );
}
export default App;
