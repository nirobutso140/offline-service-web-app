import { useEffect, useState } from 'react';
import './Services.css'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        AOS.init({
          duration: 2000,
          once: false,
        });
      }, []);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <>
            <p className='text-center title text-pink-700'>Popular Service</p>
            <div className='AllServices'>
                {
                    services.slice(0,4).map(service => <>
                        <div data-aos={service.animationType} className="card card-side  shadow-xl border border-2 border-x-fuchsia-700 border-y-green-700">
                            <figure><img className='vehicleImg' src={service.serviceImage} alt="Movie" /></figure>
                            <div className="card-body ">
                                <h2 className="card-title text-fuchsia-500">{service.serviceName}</h2>
                                <p className='desc '>{service.serviceDescription}</p>
                                <p>Price: {service.servicePrice}</p>
                                <div className='service-provider'>
                                    <img className='provider_image' src={service.serviceProviderImage} alt="" />
                                    <p>{service.serviceProviderName}</p>
                                </div>
                                <div className="card-actions justify-end">
                                <Link to={`/details/${service._id}`}><button className="btn">Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
           <div className='text-center'>
            <Link to="/AllService"><button className="btn btn-secondary">Show All</button></Link>
           </div>
           <br /><br /><br /><br />
        </>
    );
};

export default Services;