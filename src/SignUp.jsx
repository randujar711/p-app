import React from 'react'
import http from './utils/http'
import {  useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom';



function SignUp(){
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
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
            //  localStorage.setItem("token", JSON.stringify(data)); 
             navigate('/')
             console.log(data)
    
        // try {
        //     const {data} = await http.post("/signup", userDetails)
        //     localStorage.setItem("token", data)
        //     navigate('/')
        //     console.log(data)
        // } catch (error) {
        //     console.error(error);
        //     if (error.response && error.response.status === 400) {
        //         setError(error.response.data)
        //     }
        // }

    };
  return (
    <div className='maindiv'>
        <div className='formoutbody'>
            <form onSubmit={handleSubmit} className='formbody'>
                <h2 className='formlabel'>SIGN UP</h2>
                <p className='pform'>Email</p>
                <input type='text' name='email' placeholder='email' onChange={handleChange}/><br />
                <p className='pform'>Password</p>
                <input type='password' name='password' placeholder='password' onChange={handleChange}/><br />
                {/* <p className='pform'>Balance</p>
                <input type='number' name='balance' placeholder='balance' onChange={handleChange}/><br />
                <p className='pform'>Username</p>
                <input type="text" name='username' placeholder='username' onChange={handleChange}/><br /> */}
                {error && (
                    <div>
                        <p>{error}</p>
                    </div>
                )}
                <button style={{marginTop:'10px', width:'38%'}} variant="contained" type='submit'>Submit</button>
                <hr  style={{width:'80%', margin:'10%'}}/>
                <div>
                    <p style={{color:'black'}}>Already a user? <Link to='/'>LOGIN</Link></p>
                </div>
            </form>
      </div>
    </div>
  )
}

export default SignUp