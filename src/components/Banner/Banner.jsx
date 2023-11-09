import './Banner.css'
import { Typewriter } from 'react-simple-typewriter'
const Banner = () => {
    return (
        <>
            <div className="banner">
               <div className="banner_content">
                    <h1 className='banner_title'>TripLink is <span style={{ color: 'red', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}

                      <Typewriter
                      words={['Efficient', 'Reliable', 'Professional', 'Trustworthy', 'Convenient']}
                      loop={5}
                      cursor
                      cursorStyle='🚗'
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                    </h1>
                    <p className='banner_desc'>Discover seamless car rentals with us. Choose from our diverse fleet, book online effortlessly,  <br /> and enjoy the freedom to explore your destination.  With top-notch safety standards and 24/7 support, <br /> your journey is in good hands. Start your adventure today!</p>
               </div>
           </div>
           <br /><br />
        </>
    );
};

export default Banner;