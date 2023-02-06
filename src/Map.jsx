import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import {useState, useRef} from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
const key = 'AIzaSyDG2ayTC3vc6hNqNJUdpXBU5xuVEa_A1K8'
const center = { lat: 40.72447100759326, lng: -73.9834909221827 }  

const libraries = ['places']

function Map({reserve, setReserve, spaces, money, setMoney}) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: key, 
        libraries
    })
    if (!isLoaded) return <div>loading...</div>
    return <MapWrap reserve={reserve} setReserve={setReserve} spaces={spaces}/>
}

const MapWrap = ({ spaces, reserve, setReserve }) => {
  const [origin, setOrigin] = useState(null)
  const [selected, setSelected] = useState(null)
  const [newMarker, setNewMarker] = useState(null)
  const [selectedId, setSelectedId] = useState(null)
  const mapStyle = {width: '400px', height: '400px'}

  const test = (id) => {
    if (reserve.length === 0) {
    setReserve([id])
  } else {
    setReserve([])
    setReserve([id])
  }
  }//sets array length to only have one object, and will set it to have the incoming parameter

  const onMapClick = (event) => {
    setNewMarker({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    })
  }

  const handleMarkerDoubleClick = () => {
    setNewMarker(null)
  }//this function is delete the marker on the map 
  return(
    <>
      <div className="input-cont">
        <PlacesAutoComplete setSelected={setSelected} setOrigin={setOrigin}/>
      </div>
      <GoogleMap 
        center={center}
        mapContainerStyle = {mapStyle}
        zoom={17}
        options = {{
          mapTypeControl: false
        }}
        onClick={onMapClick}
      >
        {spaces?.map((x)=> { 
          
          const cord = {lat: parseFloat(x.latitude, 10), lng: parseFloat(x.longitude, 10)}
          return(
            <Marker onClick={()=>{setSelectedId(x.id); test(x)}} key={x.id} position={cord}
            icon={{path: google.maps.SymbolPath.CIRCLE,
              scale: 10,
              fillColor: selectedId === x.id ? 'grey' : 'red',
              fillOpacity: 1,
              strokeColor: 'white',
              strokeWeight: 1}}
            />
          )
        })}
        {selected && <Marker position={selected} />} 
        {/* The above marker represents the point of origin to the new parking spot they are navigating to  */}
        {newMarker && <Marker 
        position={newMarker} 
        draggable={true} 
        onDragEnd={(event) => setNewMarker({lat: event.latLng.lat(), lng: event.latLng.lng()})}  
        onDblClick={handleMarkerDoubleClick}
        />}
        {/* The above marker represents the parking spot the user is reporting they found  */}
      </GoogleMap>
    </>
  )
}

const PlacesAutoComplete = ({ setSelected }) => {
    const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();
//handle select converts address to lat ang lng coordinates 
  const handleSelect = async (address) => {
    setValue(address, false);//changesvalue to input address and set it to fakse b/c we dont need more data
    clearSuggestions(); //TO CLEAR SUGGESTIONS WHEN AN ADDRESS IS SELECTED

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]); //CONVERTS ADDRESS TO COORDINATES 
    setSelected({ lat, lng });
  };
  return (
    <Combobox onSelect={handleSelect}>
        <ComboboxInput 
          value={value} //INPUTS VALUE 
          onChange={(e) => setValue(e.target.value)} 
          disabled={!ready} //INPUT WILL DISABLE IF THE SCRIPT IS NOT READY
          className={'combobox-input'} 
          placeholder='Search Origin'/>
          <ComboboxList style={{color: 'black', fontFamily: 'sans-serif'}}>
          {
            status === 'OK' && data.map(({place_id, description}) => <ComboboxOption key={place_id} value={description}/>)
          }
          </ComboboxList>
    </Combobox>
  )
}
export default Map