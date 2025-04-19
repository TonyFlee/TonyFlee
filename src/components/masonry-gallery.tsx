"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

const images = [
  {
    url: "https://i.imgur.com/oKRtTz0.jpeg",
    alt: "Portrait 1",
    width: 1,
    height: 1.2,
  },
  {
    url: "https://i.imgur.com/7bnokjZ.jpeg",
    alt: "Portrait 2",
    width: 1,
    height: 1,
  },
  {
    url: "https://i.imgur.com/loBD71N.jpeg",
    alt: "Portrait 3",
    width: 1,
    height: 1.5,
  },
  {
    url: "https://i.imgur.com/43sbHbO.jpeg",
    alt: "Portrait 4",
    width: 1,
    height: 1.3,
  },
  {
    url: "https://i.imgur.com/jIcPpXm.jpeg",
    alt: "Portrait 5",
    width: 1,
    height: 2,
  },
  {
    url: "https://i.imgur.com/amB56us.jpeg",
    alt: "Portrait 6",
    width: 1,
    height: 1.4,
  },
  {
    url: "https://i.imgur.com/10emgWx.jpeg",
    alt: "Portrait 7",
    width: 1,
    height: 1.1,
  },
  {
    url: "https://i.imgur.com/GGkeE44.jpeg",
    alt: "Portrait 8",
    width: 1,
    height: 1.2,
  },
  {
    url: "https://i.imgur.com/Huk0Bsw.jpeg",
    alt: "Portrait 9",
    width: 1,
    height: 1.4,
  },
  {
    url: "https://i.imgur.com/i33S45v.jpeg",
    alt: "Portrait 10",
    width: 1,
    height: 1.3,
  },
  {
    url: "https://i.imgur.com/bBwBNeq.jpeg",
    alt: "Portrait 11",
    width: 1,
    height: 1,
  },
  {
    url: "https://i.imgur.com/ZmhYCJf.jpeg",
    alt: "Portrait 12",
    width: 1,
    height: 1.2,
  },
  {
    url: "https://i.imgur.com/kCea5tq.jpeg",
    alt: "Portrait 13",
    width: 1,
    height: 1.1,
  },
];

export default function MasonryGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [columns, setColumns] = useState(3);

  // Responsive columns based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Organize images into columns for masonry layout
  const getColumnImages = () => {
    const columnImages: {
      url: string;
      alt: string;
      width: number;
      height: number;
    }[][] = Array.from({ length: columns }, () => []);

    images.forEach((image, index) => {
      const columnIndex = index % columns;
      columnImages[columnIndex].push(image);
    });

    return columnImages;
  };

  const nextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % images.length);
  };

  const prevImage = () => {
    if (selectedImage === null) return;
    setSelectedImage(
      selectedImage === 0 ? images.length - 1 : selectedImage - 1,
    );
  };

  const columnImages = getColumnImages();

  return (
    <div className="w-full">
      {/* Masonry Grid */}
      <div className="flex gap-4">
        {columnImages.map((column, columnIndex) => (
          <div key={columnIndex} className="flex-1 flex flex-col gap-4">
            {column.map((image, imageIndex) => {
              const originalIndex = columnIndex + imageIndex * columns;
              return (
                <motion.div
                  key={originalIndex}
                  className="relative overflow-hidden rounded-xl group"
                  style={{
                    paddingBottom: `${(image.height / image.width) * 100}%`,
                    position: "relative",
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: originalIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center"></div>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Lightbox removed */}
    </div>
  );
}