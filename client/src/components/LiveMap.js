import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import L from 'leaflet';
import { Typography } from 'antd';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function LiveMap() {
    const { shortId } = useParams();
  const [visits, setVisits] = useState([]);
  const {Title} = Typography

  useEffect(() => {
    // Fetch the visits data from the API
    axios
      .get(`api/url/analytics/${shortId}`)
      .then(async (response) => {
        const visitsWithLocation = await Promise.all(
          response.data.map(async (visit) => {
            const location = await getLocationFromIP(visit.ip);
            return { ...visit, location };
          })
        );
        setVisits(visitsWithLocation);
      })
      .catch((error) => console.error('Error fetching visits:', error));
  }, []);

  const getLocationFromIP = async (ip) => {
    try {
      const response = await axios.get(`https://ipapi.co/${ip}/json/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching location:', error);
      return null;
    }
  };

  return (
    <div>
      <Title level={2} className='mx-3'>Real-time Visits</Title>
      <MapContainer center={[51.505, -0.09]} zoom={2} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {visits.map((visit, index) => (
          visit.location && (
            <Marker key={index} position={[visit.location.latitude, visit.location.longitude]}>
              <Popup>
                {`IP: ${visit.ip}`}<br />
                {`Location: ${visit.location.city}, ${visit.location.country_name}`}<br />
                {`Time: ${new Date(visit.timestamp).toLocaleString()}`}
              </Popup>
            </Marker>
          )
        ))}
      </MapContainer>
    </div>
  );
};

export default LiveMap;
