"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import UserProfile from "./user-profile";
import ThemeSwitcher from "./theme-switcher";
import LanguageSwitcher from "./language-switcher";
import { useLanguage } from "@/context/language-context";
import { useTranslation } from "@/translations";

export default function Navbar() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <nav className="w-full border-b border-border bg-background py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          prefetch
          className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
        >
          Tony Flee
        </Link>
        <div className="flex gap-4 items-center">
        <Link
            href="#home"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            {t("nav.home")}
          </Link>
          <Link
            href="#about"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            {t("nav.about")}
          </Link>
          <Link
            href="#hobbies"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            {t("nav.hobbies")}
          </Link>
          <Link
            href="#photos"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            {t("nav.photos")}
          </Link>
          <LanguageSwitcher />
          <ThemeSwitcher />
          {/* User profile removed */}
        </div>
      </div>
    </nav>
  );
}
