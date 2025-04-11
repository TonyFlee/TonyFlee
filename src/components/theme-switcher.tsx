"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const ICON_SIZE = 16;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size={"sm"}>
          {theme === "light" ? (
            <Sun
              key="light"
              size={ICON_SIZE}
              className={"text-muted-foreground"}
            />
          ) : theme === "dark" ? (
            <Moon
              key="dark"
              size={ICON_SIZE}
              className={"text-muted-foreground"}
            />
          ) : (
            <Laptop
              key="system"
              size={ICON_SIZE}
              className={"text-muted-foreground"}
            />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-content" align="start">
        <div className="p-1">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="flex items-center gap-2 w-full px-2 py-1.5 text-sm rounded hover:bg-muted"
          >
            {theme === "light" ? (
              <>
                <Moon size={ICON_SIZE} className="text-muted-foreground" />
                <span>Switch to Dark</span>
              </>
            ) : (
              <>
                <Sun size={ICON_SIZE} className="text-muted-foreground" />
                <span>Switch to Light</span>
              </>
            )}
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
