import { create } from 'zustand';
import { User } from './types/User';

interface UserStoreState {
  selectedUsers: User[];
  selectUser: (user: User) => void;
  unselectUser: (user: User) => void;
}

const useUserStore = create<UserStoreState>((set) => ({
  selectedUsers: [],
  selectUser: (user: User) => set((state) => ({ selectedUsers: [...state.selectedUsers, user] })),

  unselectUser: (user: User) =>
    set((state) => ({
      selectedUsers: state.selectedUsers.filter((u) => u.id !== user.id),
    })),
}));

export default useUserStore;
