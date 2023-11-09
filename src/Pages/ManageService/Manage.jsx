import { Link, useLoaderData } from 'react-router-dom';
import './Manage.css'
import swal from 'sweetalert';
import { useEffect, useState } from 'react';
// import { useContext, useState } from 'react';
// import { AuthContext } from '../../providers/AuthProvider';

const Manage = () => {

    useEffect(() => {
        document.title = 'TripLink Manage Service';
      }, []);
    // const { user } = useContext(AuthContext)
    const manageService = useLoaderData()
    console.log(manageService);
    const [service, setService] = useState(manageService)
    console.log(service);

    const handleDelete = (id) => {
        const process = swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })

        if (process) {
            fetch(`https://offline-servicesharing-app-server.vercel.app/deleteService/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0)
                        swal("Good job!", "Deleted Product Successfully", "success");
                    const remainding = service.filter(item => item._id !== id)
                    setService(remainding)
                });
        }
    }


    return (
        <>
            <div className='AllServices'>
                {
                    service.map(manage => <>
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
                                    <Link><button onClick={() => handleDelete(manage._id)} className="btn btn-error">Delete</button></Link>
                                    <Link to={`/edit/${manage._id}`}><button className="btn">Edit</button></Link>
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