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
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Book Now</button>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Press ESC key or click the button below to close</p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;