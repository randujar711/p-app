import { useState } from "react"
import Map from "./Map"
import ResPage from "./ResPage"
function MainPage({user, spaces, money, setMoney}) {
    const [reserve, setReserve] = useState([])
    // console.log(user)
    return(
        <div className='main-cont'>
        <div>
        {!user && (
            <></>
        )}
        {user &&
            user.user_data.map((x)=> {
            
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
            <Map  reserve={reserve} setReserve={setReserve} money={money} setMoney={setMoney} spaces={spaces}/>
        </div>
    )
}

export default MainPage