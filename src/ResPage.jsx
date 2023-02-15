// import { useParams } from 'react-router-dom'

import { useEffect } from "react"

function ResPage({ user, reserve }){
    const paySeller = async() => {
        let buyinguser = user.id
        console.log(buyinguser)
        try{
            let price = reserve[0].price 
            console.log(price)
            let owner = reserve[0].user_id
            console.log(owner)

            const reservation = await fetch(`http://127.0.0.1:3000/parkings/${reserve[0].id}`, {
                    method: 'PATCH', 
                    headers: {
                        "Content-Type": "application/json"
                    }, 
                    body: JSON.stringify({
                        occupied: true,
                        user_id: owner,
                    })
                })
                let res = await reservation.json()
             console.log('update buyer started')
             let spot = reserve[0].id
             const updateBuyer = await fetch(`http://127.0.0.1:3000/parkings/${reserve[0].id}`, {
                    method: 'PUT', 
                    headers:{
                        "Content-Type": "application/json"
                    }, 
                    body: JSON.stringify({
                        occupied: true, 
                        price: price, 
                        id: spot, 
                        user_id: buyinguser,
                    })
                })
                let res2 = await updateBuyer.json()
                console.log('update buyer ran' )
                // debugger
            } 
            catch (error){
                console.log(error);
            }
            // debugger
        }
    
    return(
        <div className="res-cont">

        <h4>Reservations</h4>
            {
                reserve.map((x)=> {
                    console.log(x)
                    return(
                        <div key={x.id}>
                            <h5>Price: {x.price}</h5>
                            <h5>Date: {x.date}</h5>

                            <button onClick={()=> {paySeller()}} class="btn btn-secondary">
                                buy now
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ResPage