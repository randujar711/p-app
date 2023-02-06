import { useState } from "react"

function CreateSpot({user, newMarker, setNewMarker}){
    const [price, setPrice] = useState()
    const [date, setDate] = useState('')
    const nsUser = user.data[0].id
    const create = async(e) => {
        e.preventDefault()
        let req = await fetch('http://127.0.0.1:3000/parkings/', {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json"
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
        console.log(nsUser)
        let res = await req.json()
        console.log(res)
        console.log('works')
    }
    return (
        <div style={{width: '10%'}}>
        <h3>to create new spot</h3>
            <form onSubmit={create}>
                <input type="number" placeholder="price" onChange={(e)=> setPrice(e.target.value)}/>
                <input type="date" onChange={(e)=> setDate(e.target.value)}/>
                <input type="submit" onClick={create}/>
            </form>
        </div>
    )
}

export default CreateSpot