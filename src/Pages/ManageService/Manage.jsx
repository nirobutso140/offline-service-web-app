import { Link, useLoaderData } from 'react-router-dom';
import './Manage.css'
import swal from 'sweetalert';
import { useState } from 'react';
// import { useContext, useState } from 'react';
// import { AuthContext } from '../../providers/AuthProvider';

const Manage = () => {
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
            fetch(`http://localhost:5000/deleteService/${id}`, {
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

    // const handleUpdate = (e) => {
    //     e.preventDefault()
    //     const form = e.target;
    //     const serviceName = form.serviceName.value;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const area = form.area.value;
    //     const price = form.price.value;
    //     const description = form.description.value;
    //     const photo = form.photo.value
    //     const editService = { serviceName, name, email, area, price, description, photo }

    //     fetch(`http://localhost:5000/update/${service._id}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(editService),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             if(data.modifiedCount > 0){
    //                 swal("Good job!", "You update the service!", "success");
    //             }
    //         });
    // }



// Open the modal using document.getElementById('ID').showModal() method */}
// <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Edit</button>
// <dialog id="my_modal_1" className="modal">
//     <div className="modal-box">
//         <h3 className="font-bold text-lg">Book Your Service Now</h3>
//         <p className="py-4">Discover hassle-free booking and enjoy a seamless experience with our user-friendly online service.</p>
//         <form onSubmit={handleUpdate}>
//             <input type="text" name='serviceName' placeholder="Service Name" className="input book input-bordered w-full" />
//             <input type="text" name='name' placeholder="Name" className="input book input-bordered w-full" defaultValue={user?.name} readOnly />
//             <input type="text" name='email' placeholder="Email" className="input book input-bordered w-full" defaultValue={user?.email} readOnly />
//             <input type="text" name='area' placeholder="Service Area" className="input book input-bordered w-full" />
//             <input type="date" name='price' placeholder="Price" className="input book input-bordered w-full" />
//             <input type="text" name='description' placeholder="Description" className="input book input-bordered w-full" />
//             <input type="text" name='photo' placeholder="Service Photo URL" className="input book input-bordered w-full" />
//             <input type="submit" value="Edit" className="btn btn-block book" />
//         </form>
//         <div className="modal-action">
//             <form method="dialog">
//                 {/* if there is a button in form, it will close the modal */}
//                 <button className="btn">Close</button>
//             </form>
//         </div>
//     </div>
// </dialog> 



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