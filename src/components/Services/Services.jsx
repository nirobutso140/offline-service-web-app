import { useEffect, useState } from 'react';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <>
            <p className='text-center'>Popular Service</p>
            <div className='container'>
                {
                    services.slice(0,4).map(service => <>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img className='vehicleImg' src={service.serviceImage} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{service.serviceName}</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </>
    );
};

export default Services;