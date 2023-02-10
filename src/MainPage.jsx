import { useState } from "react"
import Map from "./Map"
import ResPage from "./ResPage"
import CreateSpot from "./CrePage"
function MainPage({user, setUser, spaces, money}) {
    const [reserve, setReserve] = useState([])
    const [create, setCreate] = useState([])
    const [newMarker, setNewMarker] = useState(null)
     
    return(
        <div className='main-cont'>
        <div>
        {!user && (
            <></>
        )} 
        {user &&
            <>
                <h3>{user.username}</h3>
                <h3>id: {user.id}</h3>
                <h4>{user.balance}</h4>
            </>

        }
        </div>
            <ResPage user={user} reserve={reserve}/>
            <CreateSpot user={user} setUser={setUser} newMarker={newMarker} create={create}/>
            <Map  newMarker={newMarker} setNewMarker={setNewMarker} reserve={reserve} setReserve={setReserve} spaces={spaces}/>
        </div>
    )
}

export default MainPage