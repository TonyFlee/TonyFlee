"use client";

import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import {
  ArrowUpRight,
  Gamepad2,
  Music,
  MessageCircle,
  Globe,
  User,
  MapPin,
  Cake,
} from "lucide-react";
import { AnimatedSection, AnimatedItem } from "@/components/animated-section";
import MasonryGallery from "@/components/masonry-gallery";
import { useLanguage } from "@/context/language-context";
import { useTranslation } from "@/translations";

export default function Home() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* About Section */}
      <section id="about" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t("about.title")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("about.subtitle")}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <User className="w-6 h-6" />,
                title: t("about.whoTitle"),
                description: t("about.whoDesc"),
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: t("about.whereTitle"),
                description: t("about.whereDesc"),
              },
              {
                icon: <Cake className="w-6 h-6" />,
                title: t("about.journeyTitle"),
                description: t("about.journeyDesc"),
              },
            ].map((item, index) => (
              <AnimatedItem
                key={index}
                className="p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all"
                index={index}
              >
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t("hobbies.title")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("hobbies.subtitle")}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Gamepad2 className="w-10 h-10" />,
                title: t("hobbies.gamingTitle"),
                description: t("hobbies.gamingDesc"),
                color: "bg-blue-500",
              },
              {
                icon: <Music className="w-10 h-10" />,
                title: t("hobbies.musicTitle"),
                description: t("hobbies.musicDesc"),
                color: "bg-purple-500",
              },
              {
                icon: <MessageCircle className="w-10 h-10" />,
                title: t("hobbies.discordTitle"),
                description: t("hobbies.discordDesc"),
                color: "bg-indigo-500",
              },
              {
                icon: <Globe className="w-10 h-10" />,
                title: t("hobbies.webTitle"),
                description: t("hobbies.webDesc"),
                color: "bg-green-500",
              },
            ].map((hobby, index) => (
              <AnimatedItem
                key={index}
                className="p-6 bg-card rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden relative group"
                index={index}
              >
                <div
                  className={`absolute top-0 left-0 w-2 h-full ${hobby.color}`}
                ></div>
                <div className="text-gray-800 mb-4 group-hover:scale-110 transition-transform">
                  {hobby.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{hobby.title}</h3>
                <p className="text-gray-600">{hobby.description}</p>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="photos" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t("photos.title")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("photos.subtitle")}
            </p>
          </AnimatedSection>

          <AnimatedItem className="mb-16">
            <MasonryGallery />
          </AnimatedItem>
        </div>
      </section>

      {/* Future Projects Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-4">{t("projects.title")}</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              {t("projects.subtitle")}
            </p>
            <div className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
              {t("projects.button")}
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}

