
import * as React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';

function Header({user, setUser}){
  const logout = () => {
      Cookies.remove('token')
      setUser(null)
      navigate('/')

  }
  return (
    <div className='header-cont' style={{boxDecorationBreak: '0px 10px -14px 14px #FFF'}}>
      <Link to={'/home'}>home</Link>
      {!user && (
        <>
          
          <h1><mark class='title'>quick</mark>Park</h1>
        </>
      )}
      {user && 
          <h1>Welcome <mark class='title'>{user.username}</mark></h1>
      }
      
      <Link onClick={logout} to={'/'}><LoginIcon fontSize='large'/></Link>
    </div>
  );
}

export default Header

