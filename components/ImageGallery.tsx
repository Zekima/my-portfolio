"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Info,
  Download,
  Share,
} from "lucide-react";

interface ImageData {
  filename: string;
  title?: string;
  description?: string;
  tags?: string[];
}

interface ImageGalleryProps {
  images: ImageData[] | string[];
  projectName: string;
  gridCols?: number;
  enableFullscreen?: boolean;
  enableDownload?: boolean;
  enableSharing?: boolean;
  enableZoom?: boolean;
  showThumbnailsInModal?: boolean;
}

export default function ImageGallery({
  images,
  projectName,
  gridCols = 2,
  enableFullscreen = true,
  enableDownload = true,
  enableSharing = true,
  enableZoom = true,
  showThumbnailsInModal = true,
}: ImageGalleryProps) {
  // Convert string[] to ImageData[] if necessary
  const imageData: ImageData[] = useMemo(
    () =>
      images.map((img) => (typeof img === "string" ? { filename: img } : img)),
    [images]
  );

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [filterTag, setFilterTag] = useState<string | null>(null);

  // Get all unique tags across images
  const allTags = useMemo(
    () => Array.from(new Set(imageData.flatMap((img) => img.tags || []))),
    [imageData]
  );

  // Filter images based on selected tag
  const filteredImages = useMemo(
    () =>
      filterTag
        ? imageData.filter((img) => img.tags?.includes(filterTag))
        : imageData,
    [imageData, filterTag]
  );

  const closeModal = useCallback(() => {
    setSelectedIndex(null);
    setShowInfo(false);
    setZoomLevel(1);
    document.body.style.overflow = "";
  }, []);

  const navigateImages = useCallback(
    (direction: number) => {
      if (selectedIndex === null) return;

      const newIndex =
        (selectedIndex + direction + filteredImages.length) %
        filteredImages.length;
      setSelectedIndex(newIndex);
      setShowInfo(false);
    },
    [selectedIndex, filteredImages]
  );

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      switch (e.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowLeft":
          navigateImages(-1);
          break;
        case "ArrowRight":
          navigateImages(1);
          break;
        case "i":
          setShowInfo((prev) => !prev);
          break;
        case "+":
          if (enableZoom) setZoomLevel((prev) => Math.min(prev + 0.5, 3));
          break;
        case "-":
          if (enableZoom) setZoomLevel((prev) => Math.max(prev - 0.5, 0.5));
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, closeModal, navigateImages, enableZoom]);

  // Reset zoom level when navigating to another image
  useEffect(() => {
    setZoomLevel(1);
  }, [selectedIndex]);

  const openImage = (index: number) => {
    // Find the original index in the imageData array to open the correct image
    const imageToOpen = filteredImages[index];
    const originalIndex = imageData.findIndex(
      (img) => img.filename === imageToOpen.filename
    );
    setSelectedIndex(originalIndex);
    document.body.style.overflow = "hidden";
  };

  const handleDownload = () => {
    if (selectedIndex === null) return;

    const link = document.createElement("a");
    link.href = `/images/projects/${projectName}/gallery/${filteredImages[selectedIndex].filename}`;
    link.download = filteredImages[selectedIndex].filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getGridCols = () => {
    switch (gridCols) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-1 md:grid-cols-2";
      case 3:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      case 4:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
      default:
        return "grid-cols-1 md:grid-cols-2";
    }
  };

  return (
    <div className="min-h-[60vh]">
      {/* Filter by tags */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setFilterTag(null)}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              filterTag === null
                ? "bg-primary text-white dark:text-black"
                : "bg-secondary hover:bg-secondary/80"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilterTag(tag)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                filterTag === tag
                  ? "bg-primary text-white dark:text-black"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Image grid */}
      <div className={`grid ${getGridCols()} gap-4`}>
        {filteredImages.map((image, index) => (
          <div
            key={image.filename}
            className="group relative aspect-video rounded-lg overflow-hidden bg-secondary hover:shadow-lg transition-all"
          >
            <button
              type="button"
              onClick={() => openImage(index)}
              className="w-full h-full p-0 border-none cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-primary"
            >
              <Image
                src={`/images/projects/${projectName}/gallery/${image.filename}`}
                alt={
                  image.title ||
                  image.filename.replace(/\.(png|jpg|jpeg|gif|webp)$/i, "")
                }
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain p-2"
              />

              {/* Image info overlay on hover */}
              {(image.title || image.description) && (
                <div className="absolute inset-x-0 bottom-0 bg-black/70 text-white p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                  {image.title && (
                    <h3 className="font-medium text-sm">{image.title}</h3>
                  )}
                  {image.description && (
                    <p className="text-xs text-gray-200 line-clamp-2 mt-1">
                      {image.description}
                    </p>
                  )}
                </div>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox/Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0  top-0 bg-black/90 backdrop-blur-xs z-50 flex flex-col items-center justify-center p-4">
          {/* Top toolbar */}
          <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 bg-black/50 z-10">
            <div className="text-white">
              {filteredImages[selectedIndex].title ||
                filteredImages[selectedIndex].filename.replace(
                  /\.(png|jpg|jpeg|gif|webp)$/i,
                  ""
                )}
            </div>
            <div className="flex gap-2">
              {enableZoom && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setZoomLevel((prev) => Math.max(prev - 0.5, 0.5))
                    }
                    className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white"
                    aria-label="Zoom out"
                    disabled={zoomLevel <= 0.5}
                  >
                    <ZoomOut className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setZoomLevel((prev) => Math.min(prev + 0.5, 3))
                    }
                    className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white"
                    aria-label="Zoom in"
                    disabled={zoomLevel >= 3}
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </>
              )}
              <button
                type="button"
                onClick={() => setShowInfo(!showInfo)}
                className={`p-2 rounded-full ${showInfo ? "bg-primary" : "bg-black/50 hover:bg-black/80"} text-white`}
                aria-label="Toggle info"
              >
                <Info className="w-5 h-5" />
              </button>
              {enableDownload && (
                <button
                  type="button"
                  onClick={handleDownload}
                  className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white"
                  aria-label="Download"
                >
                  <Download className="w-5 h-5" />
                </button>
              )}
              <button
                type="button"
                onClick={closeModal}
                className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            type="button"
            onClick={() => navigateImages(-1)}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={() => navigateImages(1)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main image */}
          <div
            className={`relative grow flex items-center justify-center w-full max-h-[calc(100vh-200px)] overflow-auto`}
            style={{
              cursor: zoomLevel > 1 ? "move" : "default",
            }}
          >
            <div
              className="transition-transform duration-200"
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: "center",
              }}
            >
              <Image
                src={`/images/projects/${projectName}/gallery/${filteredImages[selectedIndex].filename}`}
                alt={
                  filteredImages[selectedIndex].title ||
                  filteredImages[selectedIndex].filename.replace(
                    /\.(png|jpg|jpeg|gif|webp)$/i,
                    ""
                  )
                }
                width={1920}
                height={1080}
                className="object-contain max-h-[calc(100vh-200px)]"
                quality={100}
                priority
              />
            </div>
          </div>

          {/* Image info panel */}
          {showInfo && (
            <div className="absolute right-0 top-16 bottom-0 w-80 bg-black/80 p-6 overflow-y-auto text-white">
              <h3 className="text-xl font-semibold mb-2">
                {filteredImages[selectedIndex].title ||
                  filteredImages[selectedIndex].filename.replace(
                    /\.(png|jpg|jpeg|gif|webp)$/i,
                    ""
                  )}
              </h3>
              {filteredImages[selectedIndex].description && (
                <p className="text-sm text-gray-200 mb-4">
                  {filteredImages[selectedIndex].description}
                </p>
              )}
              {filteredImages[selectedIndex].tags &&
                filteredImages[selectedIndex].tags.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Tags:</h4>
                    <div className="flex flex-wrap gap-1">
                      {filteredImages[selectedIndex].tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-gray-700 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Details:</h4>
                <div className="text-xs space-y-1">
                  <p>Filename: {filteredImages[selectedIndex].filename}</p>
                  <p>
                    Image {selectedIndex + 1} of {filteredImages.length}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Thumbnails navigation */}
          {showThumbnailsInModal && (
            <div className="w-full max-w-6xl mt-4">
              <div className="flex gap-2 overflow-x-auto py-2 px-4 bg-black/50 rounded-lg">
                {filteredImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      const originalIndex = imageData.findIndex(
                        (i) => i.filename === img.filename
                      );
                      setSelectedIndex(originalIndex);
                    }}
                    className={`relative shrink-0 w-20 h-14 rounded overflow-hidden transition-all ${
                      selectedIndex ===
                      imageData.findIndex((i) => i.filename === img.filename)
                        ? "ring-2 ring-primary scale-105"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={`/images/projects/${projectName}/gallery/${img.filename}`}
                      alt={
                        img.title ||
                        img.filename.replace(/\.(png|jpg|jpeg|gif|webp)$/i, "")
                      }
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Status indicator */}
          <div className="absolute bottom-4 left-4 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
            {selectedIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </div>
  );
}