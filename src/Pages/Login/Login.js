import { GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle } from "react-icons/fa";
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../Hook/useTitle';

const Login = () => {
    const [error, setError] = useState('');
    const { providerLogin, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login')

    const from = location.state?.from?.pathname || '/';

    //google signIn
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/blog')
            })
            .catch(error => console.error(error))
    }
    //login with email and pass
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                setError('');
                // navigate(from, { replace: true });
                navigate('/blog')
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })

    }

    return (
        <div>
            <h1 className="text-center text-5xl font-bold p-4">Sign in</h1>
            <div className="hero m-3 ">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        {/* login form */}
                        <form onSubmit={handleLogin} style={{ width: '550px', height: '500px' }} className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ml-3">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" className="input input-bordered m-3" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ml-3">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered m-3" required />
                                <label className="label ml-3">
                                    <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-4">
                                <input className="btn btn-primary m-3 " type="submit" value="Login" />
                                <div className="divider">OR</div>

                                <button className="m-3 rounded btn btn-outline btn-primary" onClick={handleGoogleSignIn}><FaGoogle></FaGoogle> Sign in with Google</button>
                            </div>
                            <p className='text-danger'>{error}</p>
                            <p className='m-4 text-center'>New to hare Please <Link to='/register' className='text-primary font-bold'>Register</Link></p>

                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;