// import { useParams } from 'react-router-dom'

import { useEffect } from "react"

function ResPage({ user, reserve }){

    //to update buyers balance and ownership
    let buyinguser = user.user_data[0].id
    console.log(buyinguser)
    const updateBuyer = () => {
        console.log('update buyer started')
        let price = reserve[0].price 
        let spot = reserve[0].id
        debugger
        const resComp = async() => {
            let req = await fetch(`http://127.0.0.1:3000/parkings/${reserve[0].id}`, {
                method: 'PATCH', 
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
            let res = await req.json()
            console.log(price)
            console.log('update buyer ran' )
            debugger
        }
        resComp()
    }

    //to update sellers balance
    const paySeller = () => {
        let price = reserve[0].price 
        console.log(reserve[0].user.balance)
        let owner = reserve[0].user_id

        const reservation = async () => {
            let req = await fetch(`http://127.0.0.1:3000/parkings/${reserve[0].id}`, {
                method: 'PATCH', 
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify({
                    balance: price,
                    user_id: owner,
                })
            })
            let res = await req.json()
            console.log(res)
            
        }
        reservation() 
        updateBuyer()
    }
    return(
        <div style={{width: '50%', height: '50%',background:'#fff'}}>
        <h1>hello</h1>
            {
                reserve.map((x)=> {
                    return(
                        <div key={x.id}>
                            <h3>{x.price}</h3>
                            <h3>{x.date}</h3>
                            <button onClick={()=> {
                                paySeller()
                                
                                }}>
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