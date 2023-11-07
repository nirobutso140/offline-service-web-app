import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => console.log("logout successfully"))
            .catch(error => console.error(error))
    }


    return (
        <>
            <div className="navbar">
                <img className="nav_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rjWP8P1tCbbGPiVIct07nXXo219cJYyJww&usqp=CAU" alt="" />
                <div className="links">
                    <li><NavLink to='/'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400 " : ""
                        }
                    >Home</NavLink></li>


                    <li><NavLink to='/addservice'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400 " : ""
                        }
                    >Add Service</NavLink></li>
                    <li><NavLink to='/manage'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400 " : ""
                        }
                    >Manage Service</NavLink></li>

                    <li><NavLink to='/myschedules'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400 " : ""
                        }
                    >My Schedules</NavLink></li>

                    <li> <NavLink to='/login'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400" : ""
                        }
                    >Login</NavLink></li>
                    <li><NavLink to='/register'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400" : ""
                        }
                    >Register</NavLink></li>
                </div>
                <div className="userInfo_logout">
                    {

                        user ?
                            <>
                                <span>{user.photoURL}</span>
                                <span>{user.name}</span>
                                <button onClick={handleLogOut} className="btn btn-sm">Log out</button>
                            </>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm">Log in</button>
                            </Link>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;