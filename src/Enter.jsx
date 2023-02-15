import { Link } from "react-router-dom"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HomeIcon from '@mui/icons-material/Home';

function Enter () {
    return(
        <div className="main-page">
            <div class='main-page-cont'>
                <div className="main-card">
                    <AccountBoxIcon style={{fontSize: '70px'}}/>
                    <Link style={{textDecoration: 'none', color: 'black'}} to={'/login'}>Login</Link>
                </div>
                 <div className="main-card">
                    <PersonAddIcon style={{fontSize: '70px'}}/>
                    <Link style={{textDecoration: 'none', color: 'black'}} to={'/signup'}>Signup</Link>
                </div>
            </div>
            <br />
            
            <div className="main-card-1">
                <HomeIcon style={{fontSize: '70px'}}/>
                <Link style={{textDecoration: 'none', color: 'black'}} to={'/home'}>home</Link>
            </div>
        </div>
    )
}

export default Enter 