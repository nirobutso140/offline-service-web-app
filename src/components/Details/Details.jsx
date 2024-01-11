import { useLoaderData } from 'react-router-dom';
import './Details.css'
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import swal from 'sweetalert';


const Details = () => {
    useEffect(() => {
        document.title = 'TripLink Details';
      }, []);
    const {user} = useContext(AuthContext)
    const detailsInfo = useLoaderData()

    const handleBookNow = (event) =>{
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const providerEmail = form.providerEmail.value;
        const userEmail = form.userEmail.value;
        const date = form.date.value;
        const address = form.address.value;
        const price = form.price.value

        const bookService = { name, photo, providerEmail, userEmail, date, address, price }

        console.log(bookService);

        //send data to the server
        fetch('https://offline-servicesharing-app-server.vercel.app/bookService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    swal("Good job!", " Your Service Booked Successfully!", "success");
                    // form.reset()
                }
            })
    }

    return (
        <>
            <div className='details_container'>
                <div className="provider card w-96  text-neutral-content">
                    <div className="card-body items-center text-center">
                        <img className='provider_image border border-white border-2' src={detailsInfo.serviceProviderImage} alt="" />
                        <h2 className="card-title text-fuchsia-500">Service Provider: {detailsInfo.serviceProviderName}</h2>
                        <p>Address: {detailsInfo.Address}</p>
                        <p>{detailsInfo.ServiceProviderDesc}</p>
                    </div>
                </div>
                <div className="card w-96 ">
                    <figure><img src={detailsInfo.serviceImage} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-fuchsia-500">{detailsInfo.serviceName}</h2>
                        <p className='text-slate-400'>{detailsInfo.serviceDescription}</p>
                        <p className='text-slate-200'>Price: {detailsInfo.servicePrice}</p>
                        <div className='service-provider'>
                            <img className='provider_image' src={detailsInfo.serviceProviderImage} alt="" />
                            <p className='text-slate-200'>{detailsInfo.serviceProviderName}</p>
                        </div>
                        <div className="card-actions justify-end">
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Book Now</button>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg text-green-600">Book Your Service Now</h3>
                                    <p className="py-4 text-slate-600">Discover hassle-free booking and enjoy a seamless experience with our user-friendly online service.</p>
                                    <form onSubmit={handleBookNow}>
                                      <input type="text" name='name' placeholder="Service Name" className="input book input-bordered w-full" defaultValue={detailsInfo.serviceName} readOnly/>
                                      <input type="text" name='photo' placeholder="Service Image" className="input book input-bordered w-full" defaultValue={detailsInfo.serviceImage} readOnly/>
                                      <input type="text" name='providerEmail' placeholder=" Service Provider Email" className="input book input-bordered w-full" defaultValue={user?.email} readOnly/>
                                      <input type="text" name='userEmail' placeholder="User Email" className="input book input-bordered w-full" defaultValue={user?.email} readOnly/>
                                      <input type="date" name='date' placeholder=" Service Taking Date" className="input book input-bordered w-full" />
                                      <input type="text" name='address' placeholder="Address" className="input book input-bordered w-full" />
                                      <input type="text" name='price' placeholder="Price" className="input book input-bordered w-full" defaultValue={detailsInfo.servicePrice} readOnly/>
                                      <input type="submit" value="Book Now" className="btn btn-block book bg-fuchsia-600 text-white" />
                                    </form>
                                    <div className="modal-action">
                                        <form method="dialog">
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