import { useState, useEffect } from "react"
import Cookies from "js-cookie"

function CreateSpot({ user, setUser, newMarker, setNewMarker}){
    const [price, setPrice] = useState()
    const [date, setDate] = useState('')
    

    let nsUser = !user ? null : user.id
    // if (!user){
    //     nsUser = null 
    // }else{
    //     nsUser = user.id
    // }
    const create = async(e) => {
        e.preventDefault()
        // const {lat, lng} = newMarker
        let req = await fetch('http://127.0.0.1:3000/parkings/', {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json", 
                'Authorization': Cookies.get('token')
            }, 
            body: JSON.stringify({
                latitude: newMarker.lat, 
                longitude: newMarker.lng, 
                price: price, 
                date: date, 
                occupied: true,
                user_id: nsUser,
            })
        })
        let res = await req.json()
        console.log('works')
    }
    return (
        <div className="new-cont-new-cont-new-cont-new-contnew-cont-new-cont-new-cont-new-cont-new-cont-new-cont">
            <h5>Selling a New Space?</h5>
            <form onSubmit={create}>
                <input style={{width: '50%'}} type="number" placeholder="price" onChange={(e)=> setPrice(e.target.value)}/>
                <input style={{width: '50%'}} type="date" onChange={(e)=> setDate(e.target.value)}/>
                <input type="submit" onClick={create} class="btn btn-secondary"/>
            </form>
        </div>
    )
}

export default CreateSpot