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
  console.log(shortId);
  const [visits, setVisits] = useState([]);
  const {Title} = Typography
  const token = localStorage.getItem("authToken");
  const headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token || ""
  };

    useEffect(() => {
        const fetchVisits = async () => {
            try {
                // Fetch the visits data from the API
                const response = await axios.get(`/api/url/analytics/${shortId}`, { headers });
                const visitsWithLocation = await Promise.all(
                    response.data.visitHistory.map(async (visit) => {
                        const timestamp = new Date(visit.timestamp);
                        // show only last 5 minutes data
                        if (new Date() - timestamp > 5 * 60 * 1000) {
                            return { ...visit, location: null };
                        }
                        const location = await getLocationFromIP(visit.ip);
                        console.log(location);
                        return { ...visit, location };
                    })
                );
                setVisits(visitsWithLocation);
            }
            catch (error) {
                console.error('Error fetching visits:', error);
            }
        }
        fetchVisits();

        const intervalId = setInterval(fetchVisits, 180000); // 180000 ms = 3 minutes
        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [shortId]);

  const getLocationFromIP = async (ip) => {
    if (ip === "::ffff:127.0.0.1") {
        // return vadodara location
        return {
          city: "Vadodara",
          country_name: "India",
          latitude: 22.3072,
          longitude: 73.1812,
        };
    }
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
