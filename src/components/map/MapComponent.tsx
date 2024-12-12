import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useProfileStore } from '../../store/profileStore';
import { MapMarker } from './MapMarker';
import { MapInfoWindow } from './MapInfoWindow';
import { GOOGLE_MAPS_API_KEY, defaultMapConfig } from '../../config/maps';
import { useMapStyles } from '../../hooks/useMapStyles';

export const MapComponent: React.FC = () => {
  const selectedProfile = useProfileStore((state) => state.selectedProfile);
  const [selectedMarkerId, setSelectedMarkerId] = useState<string | null>(null);
  const mapStyles = useMapStyles();

  const handleMarkerClick = useCallback((profileId: string) => {
    setSelectedMarkerId(profileId);
  }, []);

  const handleInfoWindowClose = useCallback(() => {
    setSelectedMarkerId(null);
  }, []);

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={selectedProfile 
          ? { lat: selectedProfile.coordinates[1], lng: selectedProfile.coordinates[0] }
          : defaultMapConfig.center}
        zoom={selectedProfile ? 12 : defaultMapConfig.zoom}
        options={{ styles: mapStyles }}
      >
        {selectedProfile && (
          <>
            <MapMarker
              profile={selectedProfile}
              onClick={() => handleMarkerClick(selectedProfile.id)}
            />
            {selectedMarkerId === selectedProfile.id && (
              <MapInfoWindow
                profile={selectedProfile}
                onClose={handleInfoWindowClose}
              />
            )}
          </>
        )}
      </GoogleMap>
    </LoadScript>
  );
};