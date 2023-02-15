
import * as React from 'react';
import LoginIcon from '@mui/icons-material/Login';
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
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <Link to={'/'}><li className="dropdown-item"> main</li></Link>
            <Link to={'/home'}><li className="dropdown-item"> home</li></Link>

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
                <h3>User: {user.username}</h3>
                <h4 style={{display: 'flex', alignItems: 'center'}}>Balance: <AttachMoneyIcon/>{user.balance}</h4>
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
      
      <Link onClick={logout} to={'/'}><LoginIcon fontSize='large'/></Link>
    </div>
  );
}

export default Header

