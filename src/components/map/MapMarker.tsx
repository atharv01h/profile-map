import React from 'react';
import { Marker } from '@react-google-maps/api';
import { Profile } from '../../types';

interface MapMarkerProps {
  profile: Profile;
  onClick?: () => void;
}

export const MapMarker: React.FC<MapMarkerProps> = ({ profile, onClick }) => {
  return (
    <Marker
      position={{ lat: profile.coordinates[1], lng: profile.coordinates[0] }}
      onClick={onClick}
      icon={{
        url: `data:image/svg+xml,${encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 text-blue-500"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`
        )}`,
        scaledSize: new google.maps.Size(32, 32),
      }}
    />
  );
};