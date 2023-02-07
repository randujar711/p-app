import { useState } from "react"
import Map from "./Map"
import ResPage from "./ResPage"
import CreateSpot from "./CrePage"
function MainPage({user, spaces}) {
    const [reserve, setReserve] = useState([])
    const [create, setCreate] = useState([])
    const [newMarker, setNewMarker] = useState(null)
    // console.log(user)
    return(
        <div className='main-cont'>
        <div>
        {!user && (
            <></>
        )} 
        {user &&
            user.data?.map((x)=> {
                {/* console.log(x) */}
                return(
                    <>
                        <h1>id:{x.id}</h1>
                        <h1>balance: {x.balance}</h1>
                        <h1>username: {x.username}</h1>
                    </>
                )
            })}
        </div>
            <ResPage user={user} reserve={reserve}/>
            <CreateSpot user={user} newMarker={newMarker} create={create}/>
            <Map  newMarker={newMarker} setNewMarker={setNewMarker} reserve={reserve} setReserve={setReserve} spaces={spaces}/>
        </div>
    )
}

export default MainPage