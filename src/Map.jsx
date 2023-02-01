import {useState} from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
const key = 'AIzaSyDG2ayTC3vc6hNqNJUdpXBU5xuVEa_A1K8'
const center = { lat: 40.72447100759326, lng: -73.9834909221827 }  


function Map({reserve, setReserve, spaces, money, setMoney}) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: key
    })
    if (!isLoaded) return <div>loading...</div>
    return <MapWrap reserve={reserve} setReserve={setReserve} spaces={spaces}/>
}

function MapWrap({ spaces, reserve, setReserve }) {
    const mapStyle = {width: '400px', height: '400px'}

    const test = (id) => {
        if(reserve.includes(id) || reserve.available === false ) return console.log('you cannot reserve this spot')
        setReserve([...reserve, id])
    }

    return(
         <>
             <GoogleMap 
                center={center}
                mapContainerStyle = {mapStyle}
                zoom={17}
                options = {{
                    mapTypeControl: false
                }}
            >
            {spaces.map((x)=> { 
                const cord = {lat: parseFloat(x.latitude, 10), lng: parseFloat(x.longitude, 10)}

                return(
                        <Marker onClick={()=>{test(x)}} key={x.id} position={cord}/>
                    )
                })}
            </GoogleMap>
        </>
    )
}
export default Map