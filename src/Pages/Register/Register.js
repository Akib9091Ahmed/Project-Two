import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../Hook/useTitle';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate();
    useTitle('Register');

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                navigate('/login');
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }
    return (
        <div>
            <h1 className="text-center text-5xl font-bold p-4">Register now..!</h1>
            <div className="hero ">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        {/* register form */}
                        <form onSubmit={handleRegister} style={{ width: '600px', height: '500px' }} className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                            <div className="form-control">
                                <label className="label ml-3">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name" className="input input-bordered m-3" required />
                            </div>

                            <div className="form-control">
                                <label className="label ml-3">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered m-3" required />
                            </div>
                            <div className="form-control">
                                <label className="label ml-3">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered m-3" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary m-3" type="submit" value="Register" />
                            </div>
                            <p className='text-danger'>{error}</p>
                            <p className='m-4 text-center'>If you have an account <Link to='/login' className='text-primary font-bold'>Login</Link></p>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;