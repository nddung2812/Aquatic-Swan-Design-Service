'use-client'
import WaterWave from 'react-water-wave';
import './page.css';
import Navbar from './components/Navbar';
import Duckweeds from './components/Duckweeds';
import Footer from './components/Footer';
import HomeBanner from './components/HomeBanner';

const Home = () => {
  return (
    <>
    <WaterWave
      dropRadius={60}
      perturbance={0.05}
      interactive={true}
      resolution={512}
    >
      {() => (
        <div className="container">
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