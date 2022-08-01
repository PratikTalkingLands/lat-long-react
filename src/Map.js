import React from "react";
import './App.css'
import { MapContainer, TileLayer,Marker,Popup,useMapEvents,Circle,CircleMarker,Polyline,ScaleControl} from 'react-leaflet';
import { map } from "leaflet";
import { useMemo } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Sidenav from './Sidenav'

const center = {
    lat: 51.505,
    lng: -0.09,
  }

  // const newLat = marker.getLatLng().lat;
  // const newLng = marker.getLatLng().lng;

function Map() {
    const [position, setPosition] = useState(center)
    const markerRef = useRef(null)
    const [latpoints,setlatpoints] = useState('')
    const [lngpoints,setlngpoints] = useState('')

    const eventHandlers = useMemo(() => ({
      dragend() {
        const marker = markerRef.current
        setlatpoints(marker.getLatLng().lat)
        setlngpoints(marker.getLatLng().lng)
      },
    }),
    [],
    )
    const draggable=true; 
    return (
        <div id="map">
        <Sidenav latpoints={latpoints} lngpoints={lngpoints}/>
        <MapContainer center={[51.505, -0.09]} zoom={18} scrollWheelZoom={false} >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}
            draggable={draggable}
            eventHandlers={eventHandlers}
            //position={position}
            ref={markerRef}></Marker>
        
        </MapContainer>
        </div>
    );
}

export default Map;