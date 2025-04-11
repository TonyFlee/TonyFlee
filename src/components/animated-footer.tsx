"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedFooterProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedFooter({
  children,
  className = "",
}: AnimatedFooterProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedSocialIcon({
  children,
  className = "",
  href = "#",
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <motion.a
      href={href}
      className={className}
      whileHover={{ scale: 1.2, rotate: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.a>
  );
}
