import { Link, useLoaderData } from 'react-router-dom';
import './Manage.css'

const Manage = () => {
    const manageService = useLoaderData()
    return (
        <>
            <div className='AllServices'>
                {
                    manageService.map(manage => <>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img className='vehicleImg' src={manage.photo} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Service: {manage.service}</h2>
                                <p className='desc'>Name: {manage.name}</p>
                                <p className='desc'>Email: {manage.email}</p>
                                <p className='desc'>Service Area: {manage.area}</p>
                                <p className='desc'>Price: {manage.price}</p>
                                <p className='desc'>Description: {manage.description}</p>
                                <div className='service-provider'>
                                    <img className='provider_image' src={manage.serviceProviderImage} alt="" />
                                    <p>{manage.serviceProviderName}</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <Link><button className="btn btn-error">Delete</button></Link>
                                    <Link><button className="btn">Edit</button></Link>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </>
    );
};

export default Manage;