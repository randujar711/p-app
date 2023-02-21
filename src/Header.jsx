
import * as React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import DomainIcon from '@mui/icons-material/Domain';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';

function Header({user, setUser}){
  const logout = () => {
      Cookies.remove('token')
      setUser(null)
      navigate('/')

  }
  console.log(user)
  return (
    <div className='header-cont' style={{boxDecorationBreak: '0px 10px -14px 14px #FFF'}}>
      {!user && (
        <>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <MenuIcon/>
            </button>
            <ul class="dropdown-menu">
              <Link to={'/'}><li className="dropdown-item"><DomainIcon/>Main</li></Link>
              <Link to={'/home'}><li className="dropdown-item"><HomeIcon/>Home</li></Link>
            </ul>
          </div>
          <h1><mark class='title'>quick</mark>Park</h1>
        </>
      )}
      {user && (
        <>
          <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <MenuIcon/>
          </button>
          <ul className="dropdown-menu">
            <li className='user-info'>
              <div>
                <img src="src/assets/quickpark-low-resolution-color-logo.png" alt="" />
                <div>
                  <h4>User: {user.username}</h4>
                  <h4 style={{display: 'flex', alignItems: 'center'}}>Balance: <AttachMoneyIcon/><mark style={{color: 'green', background: 'none'}}>{user.balance}</mark></h4>
                </div>
              </div>
            </li>
            <hr style={{width: '80%'}}/>
            <Link style={{textDecoration: 'none'}} to={'/'}><li className="dropdown-item"><DomainIcon/>Main</li></Link>
            <Link style={{textDecoration: 'none'}} to={'/home'}><li className="dropdown-item"><HomeIcon/> Home</li></Link>

          </ul>
        </div>
          <h1>Welcome <mark class='title'>{user.username}</mark></h1>
        </>
        )
      }
      
      <Link style={{color: '#fff', margin: '0 5%'}} onClick={logout} to={'/'}><LogoutIcon fontSize='large'/></Link>
    </div>
  );
}

export default Header

