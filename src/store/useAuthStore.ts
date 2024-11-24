import { create, StateCreator } from 'zustand'
import { persist, PersistOptions } from 'zustand/middleware'

interface User {
  email: string
  token: string
}

interface UserStore {
  user: User | null
  login: (user: User) => void
  logout: () => void
}

type UserStorePersist = (
  config: StateCreator<UserStore>,
  options: PersistOptions<UserStore>,
) => StateCreator<UserStore>

export const useUserStore = create<UserStore>(
  (persist as UserStorePersist)(
    (set) => ({
      user: null,
      login: (user: User) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'userInfo',
    },
  ),
)
