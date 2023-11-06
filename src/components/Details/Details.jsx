import { useLoaderData } from 'react-router-dom';
import './Details.css'


const Details = () => {
    const detailsInfo = useLoaderData()
    return (
        <>
            <div className='details_container'>
                <div className="provider card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Service Provider: {detailsInfo.serviceProviderName}</h2>
                        <p>Address: {detailsInfo.Address}</p>
                        <p>{detailsInfo.ServiceProviderDesc}</p>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img src={detailsInfo.serviceImage} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{detailsInfo.serviceName}</h2>
                        <p>{detailsInfo.serviceDescription}</p>
                        <p>Price: {detailsInfo.servicePrice}</p>
                               <div className='service-provider'>
                                    <img className='provider_image' src={detailsInfo.serviceProviderImage} alt="" />
                                    <p>{detailsInfo.serviceProviderName}</p>
                                </div>
                        <div className="card-actions justify-end">
                           <button className="btn">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;