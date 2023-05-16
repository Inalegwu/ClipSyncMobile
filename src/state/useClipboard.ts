import { create } from "zustand";

type ClipBoardState = {
  clipboard: Array<any>;
  setClipBoardData: (val: Array<any>) => void;
};

export const useClipboard = create<ClipBoardState>((set) => ({
  clipboard: [],
  setClipBoardData: (val) => set(() => ({ clipboard: val })),
}));
