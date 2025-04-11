"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Language } from "@/translations";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (value: string) => {
    setLanguage(value as Language);
  };

  const ICON_SIZE = 16;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size={"sm"}>
          <Globe size={ICON_SIZE} className={"text-muted-foreground"} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-content" align="end">
        <DropdownMenuRadioGroup
          value={language}
          onValueChange={handleLanguageChange}
        >
          <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="km">
            ខ្មែរ (Khmer)
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
