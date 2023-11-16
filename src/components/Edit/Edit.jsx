import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../providers/AuthProvider";


const Edit = () => {
    useEffect(() => {
        document.title = 'TripLink Update Service';
      }, []);
    const {user} = useContext(AuthContext)
    console.log(user);
    const singleServiceData = useLoaderData()
    console.log(singleServiceData);


        const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const serviceName = form.serviceName.value;
        const name = form.name.value;
        const email = form.email.value;
        const area = form.area.value;
        const price = form.price.value;
        const description = form.description.value;
        const photo = form.photo.value
        const editService = { serviceName, name, email, area, price, description, photo }

        fetch(`http://localhost:5000/update/${singleServiceData._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editService),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if(data.modifiedCount > 0){
                    swal("Good job!", "You update the service!", "success");
                }
            });
    }
    return (
        <>
        
            <div className=" p-24">
                <h2 className="text-3xl font-extrabold">Edit Your Service</h2>
                <form onSubmit={handleUpdate}>
                    {/* form name and quantity row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="serviceName" placeholder="Service Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full" defaultValue={user?.displayName}  readOnly />
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
                                <input type="text" name="email" placeholder="Your Email" className="input input-bordered w-full" defaultValue={user?.email} readOnly />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Service Location</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="area" placeholder="Service Location" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form category and details row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Service Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Service Price" className="input input-bordered w-full" />
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
                                <span className="label-text">Service Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Service Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <input type="submit" value="Edit Service" className="btn btn-block" />

                </form>
            </div>
        </>
    );
};

export default Edit;