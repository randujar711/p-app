import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import http from './utils/http'
import { Link } from 'react-router-dom';

function Login() {
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState(null);
    let navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserDetails((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await http.post("/login", userDetails)
            localStorage.setItem("token", JSON.stringify(data));
            navigate('/')
            console.log(data)
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 400) {
                setError(error.response.data)
            }
        }
        window.location.reload(false)
    };


  return (
      <div>
        <div>
              <form>
                <h2>LOGIN</h2>
                <p>Email</p>
                <input type='text' name='email' placeholder='email' onChange={handleChange} /><br />
                    <p className='pform'>Password</p>
                <input type='password' name='password' placeholder='password' onChange={handleChange} /><br />
                {error && (
                    <div>
                        <p>{error}</p>
                    </div>
                )}
                <button onClick={handleSubmit}style={{marginTop:'10px', width:'38%'}} type='submit'>LOGIN</button><br />
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