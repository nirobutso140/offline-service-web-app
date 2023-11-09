import { useEffect } from "react";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Customer from "../../components/Customer/Customer";
import Pricing from "../../components/Pricing/Pricing";
import Services from "../../components/Services/Services";


const Home = () => {
    useEffect(() => {
        document.title = 'TripLink Home';
      }, []);
    return (
        <>
            <Banner/>
            <Services/>
            <About/>
            <Customer/>
            <Pricing/>
        </>
    );
};

export default Home;