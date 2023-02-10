
import * as React from 'react';
// import NestedModal from './Modals/NestedModal';
// import CurrentModal from './Modals/HistoryModal';
// import FriendsModal from './Modals/FriendsModal';
// import ScheduleModal from './Modals/ScheduledModal';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import Cookies from 'js-cookie';
// import LogOut from './LogOut';
import { Link, useNavigate } from 'react-router-dom';

function Header({user, setUser}){
  // console.log(user)
    // Dropdown Menu Fucntions Starts
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    // setAnchorEl(null);
    // };
    // DropDdwn Menu Functions Ends
  const logout = () => {
      Cookies.remove('token')
      setUser(null)
      navigate('/')

  }
  return (
    <div className='header-cont'>
      <h1>Title</h1>
      <Link to={'/home'}>home</Link>
      {!user && (
        <>
          <h1> Make sure to login</h1>
        </>
      )}
      {user && 
          <h1>Welcome {user.username}</h1>
      }
      
      <Link onClick={logout} to={'/'}><LoginIcon fontSize='large'/></Link>
    </div>
  );
}

export default Header

