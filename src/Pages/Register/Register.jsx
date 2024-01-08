import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {  useNavigate } from 'react-router-dom';
import { AuthContext } from "../../providers/AuthProvider";
import './Register.css'


const Register = () => {

    useEffect(() => {
        document.title = 'TripLink Register';
      }, []);

    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')

    const [showPass, setShowPass] = useState(false)
    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()
    

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const accepted = form.terms.checked;
        setRegisterError('')
        setSuccess('')
        const uppercaseRegex = /[A-Z]/;
        const specialCharacterRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/;
        if(!uppercaseRegex.test(password) && !specialCharacterRegex.test(password)){
          setRegisterError('Error!!! You have to give any uppercase character and special character')
          return ;
        }

        else if(!accepted){
            setRegisterError("Please accept our terms and conditions")
            return
        }

        createUser(email,password)
        .then(result =>{
            console.log(result.user);
            setSuccess('Congratulation!!! Your Account Created Successfully')
            e.target.reset()
            swal("Congratulation", "your account created successfully", "success");
            navigate('/')
        })
        .catch(error =>{
            console.error(error)
            setRegisterError(error.message)
        })
    }


    return (
        <>
             <div className="register_form">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-pink-300">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered"required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                
                                <div className="pass">
                                <input type={showPass? "text" : "password"} name="password" placeholder="Password" className="input input-bordered passInput" required />
                                <span className="eye"  onClick={()=>setShowPass(!showPass)}>
                                        {
                                           showPass? <FaEye /> : <FaEyeSlash />
                                        }
                                </span>
                                </div>
                                

                                <div className="terms_conditions_container">
                                <input type="checkbox" name="terms" id="select" />
                                <label htmlFor="select">accept our <a href="" className="terms_conditions">terms & conditions</a></label>
                                </div>

                        

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>

                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary">Register Now</button>
                            </div>
                            <p>Already have an account? please <Link to='/login'><button className="btn btn-link">Login</button> </Link></p>
                            {
                               registerError? <p className='text-red-700'>{registerError}</p> : <p className='text-green-800'>{success}</p>
                            }
                        </form>
                        
                    </div>
                </div>
            </div>
            </div> 
        </>
    );
};

export default Register;