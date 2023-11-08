import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Customer from "../../components/Customer/Customer";
import Pricing from "../../components/Pricing/Pricing";
import Services from "../../components/Services/Services";


const Home = () => {
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