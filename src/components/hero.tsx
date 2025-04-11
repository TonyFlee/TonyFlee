"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Music,
  Gamepad2,
  Globe,
  MessageCircle,
} from "lucide-react";
import {
  AnimatedBackground,
  AnimatedContent,
  AnimatedTitle,
  AnimatedDescription,
  AnimatedButtons,
  AnimatedHobbyGrid,
  AnimatedHobbyItem,
} from "@/components/animated-hero";
import { useLanguage } from "@/context/language-context";
import { useTranslation } from "@/translations";

export default function Hero() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Animated background */}
      <AnimatedBackground className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300 opacity-20" />

      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="container mx-auto px-4">
          <AnimatedContent className="text-center max-w-4xl mx-auto">
            <AnimatedTitle className="text-5xl sm:text-9xl font-bold text-foreground mb-6 tracking-tight">
              <span className="block mb-2">{t("hero.name")}</span>
              
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                AKA Tony Flee
              </span>
            </AnimatedTitle>

            <AnimatedDescription className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              {t("hero.subtitle")}
            </AnimatedDescription>

            <AnimatedButtons className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#about"
                className="inline-flex items-center px-8 py-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                {t("hero.aboutButton")}
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                href="#hobbies"
                className="inline-flex items-center px-8 py-4 text-foreground bg-secondary rounded-lg hover:bg-secondary/80 transition-colors text-lg font-medium"
              >
                {t("hero.hobbiesButton")}
              </Link>
            </AnimatedButtons>

            <AnimatedHobbyGrid className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <AnimatedHobbyItem className="flex flex-col items-center p-4 bg-card rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <Gamepad2 className="w-8 h-8 text-blue-500 mb-2" />
                <span className="text-foreground font-medium">
                  {t("hero.gaming")}
                </span>
              </AnimatedHobbyItem>
              <AnimatedHobbyItem className="flex flex-col items-center p-4 bg-card rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <Music className="w-8 h-8 text-purple-500 mb-2" />
                <span className="text-foreground font-medium">
                  {t("hero.music")}
                </span>
              </AnimatedHobbyItem>
              <AnimatedHobbyItem className="flex flex-col items-center p-4 bg-card rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <MessageCircle className="w-8 h-8 text-indigo-500 mb-2" />
                <span className="text-foreground font-medium">
                  {t("hero.discord")}
                </span>
              </AnimatedHobbyItem>
              <AnimatedHobbyItem className="flex flex-col items-center p-4 bg-card rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <Globe className="w-8 h-8 text-green-500 mb-2" />
                <span className="text-foreground font-medium">
                  {t("hero.web")}
                </span>
              </AnimatedHobbyItem>
            </AnimatedHobbyGrid>
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
}
