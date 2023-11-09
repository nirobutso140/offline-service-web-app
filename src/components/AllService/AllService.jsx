import { Link } from 'react-router-dom';
import './AllService.css'
import { useEffect, useState } from "react";


const AllService = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        document.title = 'TripLink All Service';
      }, []);

    useEffect(() => {
        fetch('https://offline-servicesharing-app-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
        <p className='text-center title'>All Services</p>
            <div className='AllServices'>
                {
                    services.map(service => <>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img className='vehicleImg' src={service.serviceImage} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{service.serviceName}</h2>
                                <p className='desc'>{service.serviceDescription}</p>
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
        </>
    );
};

export default AllService;