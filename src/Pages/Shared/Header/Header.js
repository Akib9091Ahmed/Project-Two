import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar h-16 mb-2 bg-base-100">
            <div className="flex-1">
                <Link to={"/"} className="btn btn-ghost normal-case text-xl">Akib </Link>
            </div>
            <div className="flex-1 font-semibold">
                {/* <Link to={"/"} className="mr-5">Home</Link>
                <Link to={"/blog"} className="mr-5">Blog</Link> */}
            </div>
            <div className="flex-none font-semibold gap-2 ">

                {
                    user?.email ?
                        <>
                            <div className="dropdown dropdown-end ml-5">
                                <Link to={"/blog"} className="mr-5">About</Link>
                                <a onClick={handleLogOut} href='/'>Logout</a>
                                {/* <span className='m-4'>{user?.displayName}</span>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full bg-base-300">
                                        <img alt='' src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a href='/' className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a href='/'>Settings</a></li>
                                    <li><a onClick={handleLogOut} href='/'>Logout</a></li>
                                </ul> */}
                            </div>

                        </>
                        :
                        <>
                            <Link to={"/login"} className="mr-5">Login</Link>
                            <Link to={"/register"} className="mr-5">Register</Link>
                        </>
                }

            </div>
        </div>
    );
};

export default Header;