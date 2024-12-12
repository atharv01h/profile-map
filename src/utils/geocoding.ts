import { Profile } from '../types';

export const geocodeAddress = async (address: string): Promise<[number, number]> => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
      )}&key=${process.env.GOOGLE_MAPS_API_KEY}`
    );
    const data = await response.json();

    if (data.results && data.results[0]) {
      const { lat, lng } = data.results[0].geometry.location;
      return [lng, lat];
    }
    throw new Error('No results found');
  } catch (error) {
    console.error('Geocoding error:', error);
    return [0, 0];
  }
};