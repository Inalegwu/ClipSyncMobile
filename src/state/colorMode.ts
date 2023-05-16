import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type ColorMode = "Dark" | "Light";

interface ColorModeState {
  colorMode: ColorMode;
  setColorMode: (val: ColorMode) => void;
}

export const useColorMode = create<ColorModeState>()(
  persist(
    (set) => ({
      colorMode: "Dark",
      setColorMode: (val) => set(() => ({ colorMode: val })),
    }),
    { name: "colorMode", storage: createJSONStorage(() => AsyncStorage) }
  )
);
