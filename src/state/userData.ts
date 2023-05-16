import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type UserState = {
  appId: string | undefined;
  setAppId: (id: string) => void;
};

export const useUserState = create<UserState>()(
  persist(
    (set) => ({ appId: "", setAppId: (id) => set(() => ({ appId: id })) }),
    { name: "userData", storage: createJSONStorage(() => AsyncStorage) }
  )
);
