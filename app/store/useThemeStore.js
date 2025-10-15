import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useThemeStore = create(
  persist(
    (set) => ({
      darkMode: false,
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
      setDarkMode: (value) => set({ darkMode: value }),
    }),
    {
      name: 'theme-storage',
      storage: {
        getItem: (name) => sessionStorage.getItem(name),
        setItem: (name, value) => sessionStorage.setItem(name, value),
        removeItem: (name) => sessionStorage.removeItem(name),
      },
    }
  )
)

export default useThemeStore
