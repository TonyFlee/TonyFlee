"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface HobbyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export default function HobbyCard({
  icon,
  title,
  description,
  color,
}: HobbyCardProps) {
  return (
    <motion.div
      className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className={`absolute top-0 left-0 w-2 h-full ${color}`}></div>
      <div className="text-gray-800 mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
