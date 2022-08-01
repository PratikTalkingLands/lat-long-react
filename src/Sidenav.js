import React, { useState } from "react";
import Axios from 'axios'
import './App.css'
import Map from './Map';
import { MapContainer, TileLayer,Marker,Popup,useMapEvents,Circle,CircleMarker,Polyline,ScaleControl} from 'react-leaflet';
// import { marker } from "leaflet";
import { useMemo } from "react";
import { useRef } from "react";

function Sidenav(props) {
    console.log(props)

    const url = ""
    const [data, setData] = useState({
        latitude: "",
        longitude: "",
        story: ""
    })


    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            latitude: data.latitude,
            longitude: data.longitude,
            story: data.story
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    function handle(e) {
        const newData = e.target.value;
        setData({
            ...data,
            [e.target.name]:newData
        })

        // const newData = {...data}
        // newData[e.target.id] = e.target.value
        // setData(newData)
        console.log(data)
    }

    return (
        <div className='sidebar'>
            <div className='title'>
                <h1>Talking Lands</h1>
            </div>
            <form class="story-form" onSubmit={(e)=>submit(e)}>
                <input onChange={(e)=>handle(e)} type="text" id="latitude"   value={props.latpoints} placeholder="Latitude" name="latitude"/>
                <input onChange={(e)=>handle(e)} type="text" id="longitude" value={props.lngpoints} placeholder="Longitude" name="longitude"/>
                <input onChange={(e)=>handle(e)} type="textarea" id="story" value={data.story} name="story" placeholder="Enter your story" style={{"height": 80}}/>
                <div class="drag-area">
                    <div class="icon"><i class="fas fa-cloud-upload-alt"></i></div>
                    <header>Drag and Drop to Upload File</header>
                    <span>OR</span>
                    <button>Browse File</button>
                    <input type="file" hidden/>
                </div>
                <button type="click" id="submit-btn">Enter Story</button>
            </form>
        </div>
    );
}

export default Sidenav;