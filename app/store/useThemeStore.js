import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Create a store with Zustand + localStorage persistence
const useThemeStore = create(
  persist(
    (set) => ({
      // Default theme
      darkMode: false,

      // Toggle function
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),

      // Optional: explicitly set theme
      setDarkMode: (value) => set({ darkMode: value }),
    }),
  )
)

export default useThemeStore
