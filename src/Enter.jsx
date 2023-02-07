import { Link } from "react-router-dom"

function Enter () {
    return(
        <>
            <h1>enter page</h1>
            <Link to={'/login'}>login</Link><br />
            <Link to={'/home'}>home</Link>
        </>
    )
}

export default Enter 