import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log("logout successfully"))
            .catch(error => console.error(error))
    }


    return (
        <>
            <div className="navbar">
                <img className="nav_logo" src="/image/rsz_attachment_104083548-removebg-preview.png" alt="" />
                <div className="links">
                    <li><NavLink to='/'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-fuchsia-600" : ""
                        }
                    >Home</NavLink></li>


                    <li><NavLink to='/addservice'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-fuchsia-600" : ""
                        }
                    >Add Service</NavLink></li>
                    <li><NavLink to='/manage'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-fuchsia-600" : ""
                        }
                    >Manage Service</NavLink></li>

                    <li><NavLink to='/myschedules'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-fuchsia-600" : ""
                        }
                    >My Schedules</NavLink></li>

                    <li> <NavLink to='/login'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-fuchsia-600" : ""
                        }
                    >Login</NavLink></li>
                    <li><NavLink to='/register'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-fuchsia-600" : ""
                        }
                    >Register</NavLink></li>
                </div>
                <div className="userInfo_logout">
                    {

                        user ?
                            <>
                                <span>{user?.displayName}</span>
                                <button onClick={handleLogOut} className="btn btn-sm btn-secondary">Log out</button>
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