import React from 'react';
import { InfoWindow } from '@react-google-maps/api';
import { Profile } from '../../types';

interface MapInfoWindowProps {
  profile: Profile;
  onClose: () => void;
}

export const MapInfoWindow: React.FC<MapInfoWindowProps> = ({ profile, onClose }) => {
  return (
    <InfoWindow
      position={{ lat: profile.coordinates[1], lng: profile.coordinates[0] }}
      onCloseClick={onClose}
    >
      <div className="p-2">
        <h3 className="font-semibold">{profile.name}</h3>
        <p className="text-sm text-gray-600">{profile.address}</p>
      </div>
    </InfoWindow>
  );
};