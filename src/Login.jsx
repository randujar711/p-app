import React, { useEffect } from 'react'
import { useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import http from './utils/http'
import { Link } from 'react-router-dom';

function Login({logout, setUser, user, form, handleSubmit}) {
    // const [userDetails, setUserDetails] = useState({
    //     email: "",
    //     password: "",
    // });

    // const [error, setError] = useState(null);
    // let navigate = useNavigate();

    // const handleChange = (e) => {
    //     const {name, value} = e.target;
    //     setUserDetails((prev) => {
    //         return { ...prev, [name]: value };
    //     });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const { data } = await http.post("/login", userDetails)
    //         localStorage.setItem("token", JSON.stringify(data));
    //         navigate('/')
    //         console.log(data)
    //     } catch (error) {
    //         console.error(error);
    //         if (error.response && error.response.status === 400) {
    //             setError(error.response.data)
    //         }
    //     }
    //     window.location.reload(false)
    // };
    // let navigate = useNavigate();
    // const handleSubmit = async (e) => {
    //   e.preventDefault()
    //   let formData = new FormData(form.current)
    //   let req = await fetch("http://127.0.0.1:3000/login", {
    //     method: "POST",
    //     body: formData
    //     })
    //   let res = await req.json()
    //   Cookies.set('token', res.token)
    //   setUser(res.user)
    //   console.log(user)
    //   navigate('/home')
    // }

  return (
      <div>
        <div>
              <form ref={form} onSubmit={handleSubmit}>
                <h2>LOGIN</h2>
                <p>Email</p>
                <input type='email' name='email' placeholder='email' /><br />
                    <p className='pform'>Password</p>
                <input type='password' name='password' placeholder='password' /><br />


                <button style={{marginTop:'10px', width:'38%'}} type='submit'>
                    LOGIN 
                </button>
                <br />
                <hr style={{ width: '80%', margin: '10%' }} />
                <div>
                    <div>
                        <p style={{ color: 'black' }}>Need an account? <Link to='/signup'>SIGN UP</Link></p>
                    </div>
                </div>
          </form>
          
        </div>

      </div>
  )
}

export default Login