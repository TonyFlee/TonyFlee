"use client";

import { motion } from "framer-motion";

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}

export default function AboutCard({
  icon,
  title,
  description,
  index = 0,
}: AboutCardProps) {
  return (
    <motion.div
      className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
