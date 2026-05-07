import { useEffect } from "react";
import { useAppStore } from "@/store/app-store";

export function useTheme(): void {
  const theme = useAppStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
}
