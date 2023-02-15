import React from 'react'
import http from './utils/http'
import {  useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
function SignUp(){
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
        username: '',
        balance: '',
    });

    const [error, setError] = useState(null);
    let navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserDetails((prev) => {
            return {...prev, [name]: value};
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const { data } = await http.post("/signup", userDetails)
             navigate('/')
             console.log(data)

    };
  return (
    <div className='login-cont'>
        <img src='src/assets/quickpark-low-resolution-color-logo.png' alt="" />
        <div className='form-cont'>
            <form onSubmit={handleSubmit}>
                <h2 className='formlabel'>SIGN UP</h2>
                <p className='pform'>Email</p>
                <input type='text' name='email' placeholder='email' onChange={handleChange}/><br />
                <p className='pform'>Password</p>
                <input type='password' name='password' placeholder='password' onChange={handleChange}/><br />
                <p className='pform'>Balance</p>
                <input type='number' name='balance' placeholder='balance' onChange={handleChange}/><br />
                <p className='pform'>Username</p>
                <input type="text" name='username' placeholder='username' onChange={handleChange}/><br /> 
                 {/* {error && (
                    <div>
                        <p>{error}</p>
                    </div>
                )} */}
                <button style={{marginTop:'10%', width:'50%'}} variant="contained" type='submit' class="btn btn-secondary">Sign Up </button>
                <hr  style={{width:'80%', margin:'10%'}}/>
                <div>
                    <p style={{color:'black'}}>Already a user? <Link to='/login'>LOGIN</Link></p>
                </div>
            </form>
      </div>
    </div>
  )
}

export default SignUp