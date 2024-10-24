import { create } from 'zustand';

interface LayoutState {
  showLeftSidebar: boolean;
  showRightSidebar: boolean;
  showTaskOverlay: boolean;
  showSettingsOverlay: boolean;
  toggleLeftSidebar: () => void;
  toggleRightSidebar: () => void;
  setTaskOverlay: (value: boolean) => void;
  closeTaskOverlay: () => void;
  toggleTaskOverlay: () => void;
  setSettingsOverlay: (value: boolean) => void;
  toggleSettingsOverlay: () => void;
}

export const useLayoutStore = create<LayoutState>((set) => ({
  showLeftSidebar: true,
  showRightSidebar: true,
  showTaskOverlay: false,
  showSettingsOverlay: false,
  toggleLeftSidebar: () =>
    set((state) => ({ showLeftSidebar: !state.showLeftSidebar })),
  toggleRightSidebar: () =>
    set((state) => ({ showRightSidebar: !state.showRightSidebar })),
  toggleTaskOverlay: () =>
    set((state) => ({ showTaskOverlay: !state.showTaskOverlay })),
  setTaskOverlay: (value: boolean) => set({ showTaskOverlay: value }),
  closeTaskOverlay: () => set({ showTaskOverlay: false }),
  toggleSettingsOverlay: () =>
    set((state) => ({ showSettingsOverlay: !state.showSettingsOverlay })),
  setSettingsOverlay: (value: boolean) => set({ showSettingsOverlay: value }),
}));