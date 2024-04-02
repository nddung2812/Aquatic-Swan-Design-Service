'use client'
import ReactHowler from 'react-howler'
import WaterWave from 'react-water-wave';
import './page.css';
import Navbar from './components/Navbar';
import Duckweeds from './components/Duckweeds';
import Footer from './components/Footer';
import HomeBanner from './components/HomeBanner';
import { Preloader } from "./components/Preloader.jsx"

const Home = () => {
  return (
    <>
    <Preloader />
    <WaterWave
      dropRadius={60}
      perturbance={0.05}
      interactive={true}
      resolution={512}
    >
      {() => (
        <div className="container">
          <video 
            autoPlay 
            muted 
            loop
            >
            <source src="https://znjf1ip6migqhqsx.public.blob.vercel-storage.com/Koifish-yTANtUJgMxz90jG7i5JvODHDj2RVQO.mp4" type="video/mp4" />
          </video>
          <ReactHowler src="https://znjf1ip6migqhqsx.public.blob.vercel-storage.com/BlueDream-3zIGmjQ2jnpCR09dSO0k2olRfYnEEO.mp3" playing={true} volume={0.5} loop={true}/>
          <Duckweeds />
          <Navbar />
          <HomeBanner />
          <Footer />
        </div>
      )}
    </WaterWave>
    </>
  );
}

export default Home