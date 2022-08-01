import React, { useState } from "react";
import Axios from 'axios'
import './App.css'
import Map from './Map';
import { MapContainer, TileLayer,Marker,Popup,useMapEvents,Circle,CircleMarker,Polyline,ScaleControl} from 'react-leaflet';
// import { marker } from "leaflet";
import { useMemo } from "react";
import { useRef } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";

function Sidenav(props) {
     //console.log(props)

    const url = "" 
    const [data, setData] = useState({
        latitude: "",
        longitude: "",
        story: ""
    })


    /*function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            latitude: data.latitude,
            longitude: data.longitude,
            story: data.story
        })
        .then(res=>{
            console.log(res.data)
        })
    }*/

    // url = https://jsonbase-8e899-default-rtdb.firebaseio.com

    /*const [details, setDetails] = useState({
        lat: '',
        long: '',
        story: '',
       
    })*/

    /*const postData = async(e) => {
        e.preventDefault()
        const{lat, long, story} = details;
        const res = await fetch("https://jsonbase-8e899-default-rtdb.firebaseio.com/latlng.json",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                lat,
                long,
                story,
            })
        })
    }*/


    // Handle function for seting the data in the form
    //LatLng are comming from props from the Map.js component
    function handle(e) {
        const newData = e.target.value;
        
        setData(()=>({
            latitude:props.latpoints,
            longitude:props.lngpoints,
            story:e.target.value
        }))
        // ...data,
        // [e.target.name]:newData

        // const newData = {...data}
        // newData[e.target.id] = e.target.value
        // setData(newData)
       
    }
    // Handle click event, 
    // this fun will be called after the btn-click and will upload in the database
    // Initialising the onClick function to push with async
    const handleOnCLick = async(e)=>{
        e.preventDefault();
        console.log(data)
        axios.post('https://jsonbase-8e899-default-rtdb.firebaseio.com/sample.json',data)
        .then(response =>console.log("response",response))
        .catch(json => console.log(json))
    }
//form start
    return (
        <div className='sidebar'>
            <div className='title'>
                <h1>Talking Lands</h1>
            </div>
            <form className="story-form">
                <input onChange={(e)=>handle(e)} type="text" id="latitude"   value={props.latpoints} placeholder="Latitude" name="latitude"/>
                <input onChange={(e) =>handle(e)} type="text" id="longitude" value={props.lngpoints} placeholder="Longitude" name="longitude"/>
                <input onChange={(e)=>handle(e)} type="textarea" id="story" value={data.story} name="story" placeholder="Enter your story" style={{"height": 80}}/>
                <div className="drag-area">
                    <div class="icon"><i class="fas fa-cloud-upload-alt"></i></div>
                    <header>Drag and Drop to Upload File</header>
                    <span>OR</span>
                    <button>Browse File</button> {/*Image upload feature left*/}
                    <input type="file" hidden/>
                </div>
                <button onClick={handleOnCLick} type="click" id="submit-btn">Enter Story</button>
                
            </form>
        </div>
    );
}

export default Sidenav;