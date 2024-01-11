import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";



const Layout = () => {
    return (
        <>
            <Navbar/>
            <div className="min-h-[calc(100vh-116px)]">
            <Outlet/>
            </div>
            <Footer/>
        </>
    );
};

export default Layout;