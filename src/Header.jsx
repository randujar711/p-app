
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
import LogOut from './LogOut';
import { Link } from 'react-router-dom';

function Header({tuser}){
  // console.log(user)
    // Dropdown Menu Fucntions Starts
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };
    // DropDdwn Menu Functions Ends
  return (
    <div className='header-cont'>
      <h1>Title</h1>
      {!tuser && (
        <>
          <Link to={'/login'}><h1>login </h1></Link>
        </>
      )}
      {tuser && 
      
        tuser.user_data.map((x)=> {
          return(
            <h1>Welcome {x.username}</h1>
          )
        })
      }
      
      <Link to={'/logout'}><LoginIcon fontSize='large'/></Link>
    </div>
  );
}

export default Header

