import React, { useState } from 'react';
import { useProfileStore } from '../store/profileStore';
import { Profile } from '../types';
import { Pencil, Trash2, Plus } from 'lucide-react';
import { geocodeAddress } from '../utils/geocoding';
import { ProfileForm } from '../components/admin/ProfileForm';
import { ProfileTable } from '../components/admin/ProfileTable';

export const AdminDashboard: React.FC = () => {
  const { profiles, addProfile, updateProfile, deleteProfile } = useProfileStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editingProfile, setEditingProfile] = useState<Partial<Profile>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProfile.address) return;

    const coordinates = await geocodeAddress(editingProfile.address);
    const profileWithCoordinates = {
      ...editingProfile,
      coordinates,
    };

    if (editingProfile.id) {
      updateProfile(editingProfile.id, profileWithCoordinates as Profile);
    } else {
      addProfile({
        ...profileWithCoordinates,
        id: Date.now().toString(),
      } as Profile);
    }
    setIsEditing(false);
    setEditingProfile({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Profile Management</h2>
          <button
            onClick={() => {
              setIsEditing(true);
              setEditingProfile({});
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Profile
          </button>
        </div>

        {isEditing && (
          <ProfileForm
            profile={editingProfile}
            onSubmit={handleSubmit}
            onCancel={() => setIsEditing(false)}
          />
        )}

        <ProfileTable
          profiles={profiles}
          onEdit={(profile) => {
            setIsEditing(true);
            setEditingProfile(profile);
          }}
          onDelete={deleteProfile}
        />
      </div>
    </div>
  );
};