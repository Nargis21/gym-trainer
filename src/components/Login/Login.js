import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || '/'
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Email Sent!')
        }
        else {
            toast('Enter Your email')
        }
    }
    if (user) {
        navigate(from, { replace: true })
    }

    const [signInWithGoogle, Googleuser, Googleloading, Googleerror] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleUserSignIn = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <input onBlur={handleEmailBlur} type="email" placeholder='Your Email' required />
                    </div>
                    <div className="input-group">
                        <input onBlur={handlePasswordBlur} type="password" placeholder='Password' required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to RCotterill? <Link className='form-link' to='/signup'>Create an account</Link>
                </p>
                <p>Forget Password? <span className='text-primary reset-btn' onClick={resetPassword}>Reset Password</span></p>
                <div className="or-line">
                    <div className='line'>
                        <hr />
                    </div>
                    <p>or</p>
                    <div className='line'>
                        <hr />
                    </div>
                </div>
                <div className="btn-container">
                    <button onClick={() => signInWithGoogle()} className='google-btn'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="" />
                        <p>Continue With Google</p>
                    </button>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Login;