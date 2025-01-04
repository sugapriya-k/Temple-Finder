
import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, InfoWindow, withGoogleMap, withScriptjs } from 'react-google-maps';
import "./maptemp.css"

const MapComponent = withScriptjs(
  withGoogleMap(({ temples, center, userLocation, onMarkerClick, selectedTemple }) => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={center}
      center={center}
      options={{ streetViewControl: false, mapTypeControl: false }}
      onClick={onMarkerClick}
    >
      {temples.map((temple) => (
        <Marker
          key={temple.id}
          position={{ lat: temple.latitude, lng: temple.longitude }}
          onClick={() => onMarkerClick(temple)}>
          {temple.showInfo && (
            
            <InfoWindow onCloseClick={() => onMarkerClick(null)}>
              <a href={temple.link} className='tlink'><div className='info'>
                <h3>{temple.name}</h3>
                <p>{temple.address}</p>
              </div></a>
            </InfoWindow>
          )}


        </Marker>
      ))}
      {userLocation && (
        <Marker
          position={{ lat: userLocation.latitude, lng: userLocation.longitude }}
          icon={{
            path: 'M10 0A10 10 0 1 0 10 20A10 10 0 1 0 10 0',
            fillColor: 'pink',
            fillOpacity: 1,
            strokeWeight: 1,
            strokeColor: 'blue',
            scale: 0.5,
          }}
          onClick={onMarkerClick}
        />
      )}
    </GoogleMap>
  ))
);

const MapLocation = () => {
  const [temples, setTemples] = useState([]);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user,setUser]=useState(false)

  const nearby=()=>{
    setUser((prevUser) => !prevUser);
  }

  useEffect(()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCenter({ lat: latitude, lng: longitude });
          setUserLocation({ latitude, longitude });
          if(user){
            fetchTemples(latitude,longitude)
          }
          else{
            setLoading(false)
            setTemples([])
          }
        },
        (error) => {
          console.error('Error getting location:', error);
          setLoading(false);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser.');
      setLoading(false);
    }
  },[user])
  

  const handleMarkerClick = async (temple) => {
    if (temple && temple.latLng) {
      const latitude = temple.latLng.lat();
      const longitude = temple.latLng.lng();
      fetchTemples(latitude, longitude);
    }
    setTemples((prevTemples) =>
      prevTemples.map((prevTemple) => ({
        ...prevTemple,
        showInfo: prevTemple === temple ? !prevTemple.showInfo : false,
      }))
    );
  };

  const fetchTemples = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `http://localhost:8080/temples/nearby?latitude=${latitude}&longitude=${longitude}&radius=5`
      );
      const data = await response.json();
      setTemples(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching temples:', error);
      setLoading(false);
    }
  };

  return (
    <div className='map' style={{ height: '630px', width: '100%' }}>
      <div className={`btn ${loading? '':'show'}`} onClick={nearby} >
        <p className={`nearby ${user ? 'on' : 'off'}`} ></p>
      </div>
      {loading ? (
        <div><p className='p'>Loading...</p></div>
      ) : (

        <MapComponent
          temples={temples}
          center={center}
          userLocation={userLocation}
          onMarkerClick={handleMarkerClick}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDvqR-xKKglZ4_vOjlxWyJrXFCR5Cd6H9k&libraries=places`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />


      )}
    </div>
  );
};

export default MapLocation;
