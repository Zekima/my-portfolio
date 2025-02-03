'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface ImageGalleryProps {
    images: string[],
    projectName: string,
}

export default function ImageGallery({images, projectName} : ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((filename) => (
          <button
            key={filename}
            type="button"
            onClick={() => setSelectedImage(filename)}
            className="relative aspect-video bg-secondary rounded-lg overflow-hidden hover:shadow-lg transition-all p-0 border-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <Image
              src={`/images/projects/${projectName}/${filename}`}
              alt={`${filename.replace('.png', '')}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain p-2"
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4">
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 z-50 bg-white/90 hover:bg-white rounded-full p-2 transition-colors shadow-lg"
          >
            <X className="w-8 h-8 text-gray-900" />
          </button>
          
          <div className="relative w-fit max-w-6xl max-h-[90vh] bg-secondary rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={`/images/projects/${projectName}/${selectedImage}`}
              alt={`${selectedImage.replace('.png', '')} screen`}
              width={1920}
              height={1080}
              className="object-contain w-full h-full"
              quality={100}
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}