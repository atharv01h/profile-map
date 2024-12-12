import { create } from 'zustand';
import type { Profile } from '../types';

interface ProfileState {
  profiles: Profile[];
  selectedProfile: Profile | null;
  searchQuery: string;
  setProfiles: (profiles: Profile[]) => void;
  addProfile: (profile: Profile) => void;
  updateProfile: (id: string, profile: Profile) => void;
  deleteProfile: (id: string) => void;
  setSelectedProfile: (profile: Profile | null) => void;
  setSearchQuery: (query: string) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  profiles: [
    {
      id: '1',
      name: 'Arjun Patel',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
      description: 'Senior Software Engineer specializing in AI and Machine Learning',
      address: 'Bangalore, Karnataka',
      coordinates: [77.5946, 12.9716],
      contact: {
        email: 'arjun.patel@example.com',
        phone: '+91 98765 43210',
      },
      interests: ['Technology', 'Cricket', 'Classical Music'],
    },
    {
      id: '2',
      name: 'Priya Sharma',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      description: 'UX Designer crafting delightful digital experiences',
      address: 'Mumbai, Maharashtra',
      coordinates: [72.8777, 19.0760],
      contact: {
        email: 'priya.sharma@example.com',
        phone: '+91 87654 32109',
      },
      interests: ['Design', 'Yoga', 'Photography'],
    },
    {
      id: '3',
      name: 'Rahul Verma',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      description: 'Product Manager with expertise in fintech solutions',
      address: 'Delhi, NCR',
      coordinates: [77.1025, 28.7041],
      contact: {
        email: 'rahul.verma@example.com',
        phone: '+91 76543 21098',
      },
      interests: ['Finance', 'Travel', 'Reading'],
    },
  ],
  selectedProfile: null,
  searchQuery: '',
  setProfiles: (profiles) => set({ profiles }),
  addProfile: (profile) => set((state) => ({ profiles: [...state.profiles, profile] })),
  updateProfile: (id, profile) =>
    set((state) => ({
      profiles: state.profiles.map((p) => (p.id === id ? profile : p)),
    })),
  deleteProfile: (id) =>
    set((state) => ({
      profiles: state.profiles.filter((p) => p.id !== id),
    })),
  setSelectedProfile: (profile) => set({ selectedProfile: profile }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));