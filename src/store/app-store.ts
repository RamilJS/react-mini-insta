import { create } from "zustand";

type Theme = "light" | "dark";
type Grid = 3 | 4 | 5;

type AppState = {
  theme: Theme;
  grid: Grid;
  userId: string | null;

  setTheme: (theme: Theme) => void;
  setGrid: (grid: Grid) => void;
  setUserId: (userId: string | null) => void;
};

export const useAppStore = create<AppState>((set) => ({
  theme: (localStorage.getItem("theme") as Theme) || "light",
  grid: (Number(localStorage.getItem("grid")) as Grid) || 4,
  userId: sessionStorage.getItem("userId"),

  setTheme: (theme) => {
    localStorage.setItem("theme", theme);
    set({ theme });
  },

  setGrid: (grid) => {
    localStorage.setItem("grid", String(grid));
    set({ grid });
  },

  setUserId: (userId) => {
    if (userId) {
      sessionStorage.setItem("userId", userId);
    } else {
      sessionStorage.removeItem("userId");
    }

    set({ userId });
  },
}));
