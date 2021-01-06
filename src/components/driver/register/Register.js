import {React, useRef, useState} from 'react';
import {useAuth} from '../../contexts/AuthContext';
import './register.scss';

const Register = () => {

    const emailRef = useRef();
    const passwordRef= useRef();
    const passwordConfirmRef = useRef();
    const {register, currentUser} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        try{
            setError('');
            setLoading(true);
            await register(emailRef.current.value, passwordRef.current.value);
        } catch(e){
            setError(JSON.stringify(e));   
        }
        setLoading(false);
    }

    return( 
    <div className='register'>
        <form onSubmit={handleSubmit}>
            {error}
            {JSON.stringify(currentUser)}
            <label>Email</label>
            <input type="email" ref={emailRef} required/>
            <br/><br/>
            <label>Password</label>
            <input type="password" ref={passwordRef} required/>
            <br/><br/>
            <label>Re-type password</label>
            <input type="password" ref={passwordConfirmRef} required/>
            <br/><br/>
            <button disabled={loading} type='submit'>Register</button>
        </form>
    </div>
    );
}

export default Register;