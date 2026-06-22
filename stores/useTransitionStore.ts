// stores/useTransitionStore.ts
import { create } from "zustand";

interface TransitionState {
  showTransition: boolean;
  startTransition: () => void;
  stopTransition: () => void;
}

export const useTransitionStore = create<TransitionState>((set) => ({
  showTransition: false,
  startTransition: () => set({ showTransition: true }),
  stopTransition: () => set({ showTransition: false }),
}));
