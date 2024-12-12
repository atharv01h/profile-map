import React from 'react';
import { ProfileCard } from '../components/ProfileCard';
import { MapComponent } from '../components/map/MapComponent';
import { SearchBar } from '../components/SearchBar';
import { useProfileStore } from '../store/profileStore';

export const ProfileList: React.FC = () => {
  const { profiles, searchQuery } = useProfileStore((state) => ({
    profiles: state.profiles,
    searchQuery: state.searchQuery,
  }));

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    profile.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    profile.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <SearchBar />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProfiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="sticky top-8 bg-white rounded-lg shadow-md overflow-hidden" style={{ height: 'calc(100vh - 8rem)' }}>
            <MapComponent />
          </div>
        </div>
      </div>
    </div>
  );
};