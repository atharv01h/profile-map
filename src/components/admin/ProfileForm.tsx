import React from 'react';
import { Profile } from '../../types';

interface ProfileFormProps {
  profile: Partial<Profile>;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({
  profile,
  onSubmit,
  onCancel,
}) => {
  return (
    <form onSubmit={onSubmit} className="mb-8">
      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="Name"
          value={profile.name || ''}
          onChange={(e) =>
            profile.onChange?.({ ...profile, name: e.target.value })
          }
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={profile.photo || ''}
          onChange={(e) =>
            profile.onChange?.({ ...profile, photo: e.target.value })
          }
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Description"
          value={profile.description || ''}
          onChange={(e) =>
            profile.onChange?.({ ...profile, description: e.target.value })
          }
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Address"
          value={profile.address || ''}
          onChange={(e) =>
            profile.onChange?.({ ...profile, address: e.target.value })
          }
          className="border p-2 rounded"
        />
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};