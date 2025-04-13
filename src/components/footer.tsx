"use client";

import Link from "next/link";
import { Twitter, Instagram, Github, Twitch, Facebook } from "lucide-react";
import {
  AnimatedFooter,
  AnimatedSocialIcon,
} from "@/components/animated-footer";
import { useLanguage } from "@/context/language-context";
import { useTranslation } from "@/translations";
import { DiscordLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {/* Navigation Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              {t("footer.navigation")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600">
                  {t("footer.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-600 hover:text-blue-600"
                >
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="#hobbies"
                  className="text-gray-600 hover:text-blue-600"
                >
                  {t("footer.hobbies")}
                </Link>
              </li>
              <li>
                <Link
                  href="#photos"
                  className="text-gray-600 hover:text-blue-600"
                >
                  {t("footer.photos")}
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600">
                  {t("footer.projects")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="mailto:tornvisal77@gmail.com"
                  className="text-gray-600 hover:text-blue-600"
                >
                  {t("footer.email")}
                </Link>
              </li>
              <li>
                <Link
                  href="https://discordapp.com/users/911160495682240545"
                  className="text-gray-600 hover:text-blue-600"
                >
                  {t("footer.discord")}
                </Link>
              </li>
              <li>
                <Link
                  href="https://facebook.com/torn.visal.77"
                  className="text-gray-600 hover:text-blue-600"
                >
                  {t("footer.social")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              {t("footer.legal")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600">
                  {t("footer.terms")}
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600">
                  {t("footer.cookies")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <AnimatedFooter className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="text-gray-600 mb-4 md:mb-0">
            © {currentYear} Tony Flee. {t("footer.rights")}
          </div>

          <div className="flex space-x-6">
            <AnimatedSocialIcon
              href="https://facebook.com/torn.visal.77"
              className="text-gray-400 hover:text-blue-500"
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </AnimatedSocialIcon>
            <AnimatedSocialIcon
              href="https://instagram.com/tony_flee"
              className="text-gray-400 hover:text-pink-500"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </AnimatedSocialIcon>
            <AnimatedSocialIcon
              href="https://discordapp.com/users/911160495682240545"
              className="text-gray-400 hover:text-blue-500"
            >
              <span className="sr-only">Discord</span>
              <DiscordLogoIcon className="h-6 w-6" />
            </AnimatedSocialIcon>
            <AnimatedSocialIcon
              href="https://github.com/tonyflee"
              className="text-gray-400 hover:text-white"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </AnimatedSocialIcon>
          </div>
        </AnimatedFooter>
      </div>
    </footer>
  );
}
