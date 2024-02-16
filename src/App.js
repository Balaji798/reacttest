// import React, { useState,useEffect } from 'react';
// import Login from './components/Login';
// import { gapi } from 'gapi-script';

// const App = () => {
//   const [postcode, setPostcode] = useState('');
//   const [addresses, setAddresses] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const clientId= '430738811457-h37pi95djmat7jm4kj9836rk9r2s2p2l.apps.googleusercontent.com'

//   useEffect(()=>{
// const start=()=>{
//   gapi.client.init({
//     clientId:clientId,
//     scope:""
//   })
// }
// gapi.load("clint:auth2",start)
//   },[])
//   const fetchAddresses = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       // Replace 'YOUR_API_KEY' with your actual Google Geocoding API key
//       const apiKey= 'AIzaSyBX2ZwPP63eJyeX-f6V4Zy0492bhuJP1j8'
//       const response = await fetch(
//         `https://maps.googleapis.com/maps/api/geocode/json?address=${postcode}&key=${apiKey}`
//       );

//       if (!response.ok) {
//         throw new Error('Error fetching addresses. Please try again.');
//       }

//       const data = await response.json();
//       console.log(data)
//       const formattedAddresses = data.results.map((result) => result.formatted_address);
        
//       setAddresses(formattedAddresses);
//     } catch (error) {
//       setError(error.message || 'Error fetching addresses. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//     {/*  <h2>Address List by Postcode</h2>
//       <label>
//         Enter Postcode:
//         <input
//           type="text"
//           value={postcode}
//           onChange={(e) => setPostcode(e.target.value)}
//         />
//       </label>
//       <button onClick={fetchAddresses} disabled={!postcode || loading}>
//         Fetch Addresses
//       </button>

//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <ul>
//         {addresses.map((address, index) => (
//           <li key={index}>{address}</li>
//         ))}
//         </ul>*/}
//         <Login/>
//     </div>
//   );
// };

// export default App;


//
//clientSecret:- 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

import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

const App = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]} // Default center coordinates (London)
      zoom={13} // Default zoom level
      style={{ height: "400px", width: "100%" }} // Set the map size
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}> {/* Marker position (London) */}
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default App