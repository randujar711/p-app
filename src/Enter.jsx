import { Link } from "react-router-dom"

function Enter () {
    return(
        <div className="main-page">
            <h1>enter page</h1>
            <Link to={'/login'}>login</Link><br />
            <Link to={'/home'}>home</Link>
        </div>
    )
}

export default Enter 