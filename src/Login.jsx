import React, { useEffect } from 'react'
import { useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import http from './utils/http'
import { Link } from 'react-router-dom';

function Login({logout, setUser, user, form}) {
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault()
      let formData = new FormData(form.current)
      let req = await fetch("http://127.0.0.1:3000/login", {
        method: "POST",
        body: formData
        })
      let res = await req.json()
      Cookies.set('token', res.token)
      setUser(res.user)
      console.log(user)
      navigate('/home')
    }

  return (
      <div className='login-cont'>
        <img src='src/assets/quickpark-low-resolution-color-logo.png' alt="" />
        <div className='form-cont'>
              <form ref={form} onSubmit={handleSubmit}>
                <h2>LOGIN</h2>
                <p>Email</p>
                <input type='email' name='email' placeholder='email' /><br />
                    <p className='pform'>Password</p>
                <input type='password' name='password' placeholder='password' /><br />
                
                <button class="btn btn-secondary" style={{marginTop:'10%', width:'50%'}} type='submit'>
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