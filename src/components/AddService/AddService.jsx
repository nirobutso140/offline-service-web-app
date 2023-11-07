import swal from 'sweetalert';
import './AddService.css'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
const AddService = () => {
    const {user} = useContext(AuthContext)
    console.log(user);

    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const service = form.service.value;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const area = form.area.value;
        const description = form.description.value;
        const providerPhoto = form.providerPhoto.value
        const photo = form.photo.value;

        const addService = { service, name, email, price, area, description, photo, providerPhoto }

        console.log(addService);

        //send data to the server
        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    swal("Good job!", " Product Added Successfully!", "success");
                    // form.reset()
                }
            })
    }

    return (
        <>
            <div className="bg-[#F4F3F0] p-24">
                <h2 className="text-3xl font-extrabold">Add Service</h2>
                <form onSubmit={handleAddProduct}>
                    {/* form name and quantity row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="service" placeholder="Service Name" className="input input-bordered w-full"/>
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full" defaultValue={user?.displayName} readOnly/>
                            </label>
                        </div>
                    </div>
                    {/* form supplier row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="email" placeholder="Your Email" className="input input-bordered w-full" defaultValue={user?.email} readOnly/>
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Service Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Service Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form category and details row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Service Area</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="area" placeholder="Service Area" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Service Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="Service Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Photo url row */}
                    <div className="md:flex mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Service Provider Photo</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="providerPhoto" placeholder="Provider Photo URL" className="input input-bordered w-full" defaultValue={user?.photoURL} readOnly/>
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Service Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Service Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    
                    <input type="submit" value="Add Service" className="btn btn-block" />

                </form>
            </div>
        </>
    );
};

export default AddService;