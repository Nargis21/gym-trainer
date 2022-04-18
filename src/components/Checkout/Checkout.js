import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Checkout = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h1 className='text-primary p-3 text-center'>Please Checkout</h1>
            <div className='form-container'>
                <div>
                    <h1 className='form-title'>Checkout Info</h1>
                    <form >
                        <div className="input-group">
                            <input type="text" required placeholder='Your Name' />
                        </div>
                        <div className="input-group">
                            <input value={user?.email} type="email" required />
                        </div>
                        <div className="input-group">
                            <input type="text" required placeholder='Address' />
                        </div>
                        <div className="input-group">
                            <input type="text" placeholder='Phone' required />
                        </div>
                        <input style={{ marginBottom: '20px' }} className='form-submit' type="submit" value="Booking Add" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;