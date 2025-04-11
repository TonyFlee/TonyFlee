"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function AnimatedBackground({ className }: { className: string }) {
  return (
    <motion.div
      className={className}
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%"],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
}

export function AnimatedContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.h1
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {children}
    </motion.h1>
  );
}

export function AnimatedDescription({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      {children}
    </motion.p>
  );
}

export function AnimatedButtons({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedHobbyGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedHobbyItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} whileHover={{ scale: 1.05 }}>
      {children}
    </motion.div>
  );
}
