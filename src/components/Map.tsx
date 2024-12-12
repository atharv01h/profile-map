import React from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import { MapPin } from 'lucide-react';
import { useProfileStore } from '../store/profileStore';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGVhcjEyMzQ1Njc4OTBsZCJ9.ZXhhbXBsZV9tYXBib3hfdG9rZW4'; // Replace with your token

export const MapComponent: React.FC = () => {
  const selectedProfile = useProfileStore((state) => state.selectedProfile);

  return (
    <Map
      mapboxAccessToken={MAPBOX_TOKEN}
      initialViewState={{
        longitude: -98,
        latitude: 39,
        zoom: 3,
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
    >
      {selectedProfile && (
        <Marker
          longitude={selectedProfile.coordinates[0]}
          latitude={selectedProfile.coordinates[1]}
        >
          <MapPin className="w-8 h-8 text-blue-500" />
        </Marker>
      )}
    </Map>
  );
};