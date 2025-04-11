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
    url: "https://i.imgur.com/pMrj7tJ.jpeg",
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
    url: "https://i.imgur.com/Xd6uveg.jpeg",
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
    url: "https://i.imgur.com/kk6KbLr.jpeg",
    alt: "Portrait 13",
    width: 1,
    height: 1.1,
  },
  {
    url: "https://i.imgur.com/or4Wbpv.jpeg",
    alt: "Portrait 14",
    width: 1,
    height: 1.4,
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
    const columnImages: { url: string; alt: string; width: number; height: number; }[][] = Array.from({ length: columns }, () => []);

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
                  className="relative overflow-hidden rounded-xl cursor-pointer group"
                  style={{
                    paddingBottom: `${(image.height / image.width) * 100}%`,
                    position: "relative",
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: originalIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedImage(originalIndex)}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Maximize2
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      size={24}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-4xl max-h-[80vh] w-full"
          >
            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].alt}
              className="w-full h-full object-contain"
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === selectedImage ? "bg-white" : "bg-white/50"}`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
