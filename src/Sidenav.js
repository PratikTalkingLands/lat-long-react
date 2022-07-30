import React from "react";
import './App.css'

function Sidenav() {
    return (
        <div className='sidebar'>
            <div className='title'>
                <h1>Talking Lands</h1>
            </div>
            <form>
      <label for="latitude">Latitude:</label>
      <input id="latitude" type="text" />
      <label for="longitude">Longitude:</label>
      <input id="longitude" type="text" />
    </form>
        </div>
    );
}

export default Sidenav;