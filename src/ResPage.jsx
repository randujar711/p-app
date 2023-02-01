import { useParams } from 'react-router-dom'

function ResPage({ reserve }){
    const {id} = useParams
    const confirm = () => {
        console.log('confirms works')
        console.log(reserve[0])
        let price = reserve[0].price 
        console.log(price)
        const reservation = async() => {
            let req = await fetch(`http://127.0.0.1:3000/parkings/${id}`, {
                method: 'PATCH', 
                headers:{
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify({
                    occupied: true, 
                    price: price
                })
            })
            let res = await req.json()
            console.log(res)
        }
        reservation()
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
                            <button onClick={()=>{confirm(x)}}>buy now</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ResPage