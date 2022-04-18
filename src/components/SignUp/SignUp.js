import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })
    const navigate = useNavigate()
    if (user) {
        navigate('/home')
    }
    const [signInWithGoogle, googleError] = useSignInWithGoogle(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }
    const handleCreateUser = event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError('Your two password did not match!')
            return
        }
        if (password.length > 6) {
            setError('Password should be contain 6 characters!')
            return
        }
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Sign Up</h1>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <input onBlur={handleEmailBlur} type="email" required placeholder='Your Email' />
                    </div>
                    <div className="input-group">
                        <input onBlur={handlePasswordBlur} type="password" required placeholder='Password' />
                    </div>
                    <div className="input-group">

                        <input onBlur={handleConfirmPasswordBlur} type="password" placeholder='Confirm Password' required />
                    </div>
                    <p style={{ color: 'red' }}>{error || googleError?.message}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>
                    Already have an account? <Link className='form-link' to='/login'>Login</Link>
                </p>
                <div className="or-line">
                    <div className='line'>
                        <hr />
                    </div>
                    <p>or</p>
                    <div className='line'>
                        <hr />
                    </div>
                </div>
                <button onClick={() => signInWithGoogle()} className='google-btn'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="" />
                    <p>Continue With Google</p>
                </button>
            </div>

        </div>
    );
};

export default SignUp;