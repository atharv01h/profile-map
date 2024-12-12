import React from 'react';
import { MapPin, Mail, Phone, ChevronRight } from 'lucide-react';
import { Profile } from '../types';
import { useProfileStore } from '../store/profileStore';

interface ProfileCardProps {
  profile: Profile;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const setSelectedProfile = useProfileStore((state) => state.setSelectedProfile);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={profile.photo}
        alt={profile.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{profile.name}</h3>
        <p className="text-gray-600 mb-4">{profile.description}</p>
        
        <div className="flex items-center text-gray-500 mb-2">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{profile.address}</span>
        </div>
        
        {profile.contact?.email && (
          <div className="flex items-center text-gray-500 mb-2">
            <Mail className="w-4 h-4 mr-2" />
            <span>{profile.contact.email}</span>
          </div>
        )}
        
        {profile.contact?.phone && (
          <div className="flex items-center text-gray-500 mb-4">
            <Phone className="w-4 h-4 mr-2" />
            <span>{profile.contact.phone}</span>
          </div>
        )}

        <button
          onClick={() => setSelectedProfile(profile)}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center"
        >
          View on Map
          <ChevronRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};