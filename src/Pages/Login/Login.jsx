import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";



const Login = () => {

    useEffect(() => {
        document.title = 'TripLink Login';
      }, []);

    const { loginUser, user } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const [loginSuccess, setLoginSuccess] = useState('')
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()

    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider

    const handleGoogleAuthentication = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => console.log(result.user))
            .catch(error => console.error(error))
    }

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);
        setLoginError('')
        setLoginSuccess('')

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                setLoginSuccess("You Logged In Successfully!!!")
                e.target.reset()
                swal("Congratulation!", "You Logged In Successfully", "success");
                navigate('/')
            })
            .catch(error => {
                setLoginError(error.message)
            })
    }

    return (
        <>
            <div className="register_form">
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl text-fuchsia-600 font-bold">Login now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm ">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className="pass">
                                    <input type={showPass? "text" : "password"} name="password" placeholder="password" className="input input-bordered passInput" required />
                                    <span className="eye" onClick={()=>setShowPass(!showPass)}>
                                       {showPass? <FaEye /> : <FaEyeSlash />}
                                    </span>
                                    </div>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-secondary">Login</button>
                                </div>
                                <p>Are you new? please <Link to='/register'><button className="btn btn-link">Register</button> </Link></p>
                                <button onClick={handleGoogleAuthentication}>google Signin</button>
                                {

                                    loginError ? <p className="text-red-600">{loginError}</p> : <p className="text-green-600">{loginSuccess}</p>
                                }
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;