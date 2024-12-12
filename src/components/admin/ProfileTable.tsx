import React from 'react';
import { Profile } from '../../types';
import { Pencil, Trash2 } from 'lucide-react';

interface ProfileTableProps {
  profiles: Profile[];
  onEdit: (profile: Profile) => void;
  onDelete: (id: string) => void;
}

export const ProfileTable: React.FC<ProfileTableProps> = ({
  profiles,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Photo
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Address
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {profiles.map((profile) => (
            <tr key={profile.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="h-10 w-10 rounded-full"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{profile.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{profile.address}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => onEdit(profile)}
                  className="text-blue-600 hover:text-blue-900 mr-4"
                >
                  <Pencil className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onDelete(profile.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};