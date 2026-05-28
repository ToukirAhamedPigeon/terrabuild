"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, Film, Image as ImageIcon } from "lucide-react";

const slides = [
  {
    type: "video",
    src: "/assets/videos/slide_video.mp4",
    title: "Luxury Living Redefined",
    location: "Banani, Dhaka",
    description: "Experience unparalleled luxury in this stunning property",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop",
    title: "Luxury Villa",
    location: "Banani, Dhaka",
    description: "Experience unparalleled luxury in this stunning villa",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop",
    title: "Corporate Office",
    location: "Uttara, Dhaka",
    description: "Prime commercial space for your business",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop",
    title: "Modern Apartment",
    location: "Gulshan, Dhaka",
    description: "Contemporary living with premium amenities",
  },
];

const HeroCarousel = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoFullyLoaded, setVideoFullyLoaded] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const preloadVideoRef = useRef<HTMLVideoElement | null>(null);

  // Preload full video in background
  useEffect(() => {
    const preloadVideo = document.createElement("video");
    preloadVideo.preload = "auto";
    preloadVideo.src = slides[0].src;
    preloadVideo.muted = true;
    preloadVideoRef.current = preloadVideo;
    
    // Wait for video to be fully loaded
    preloadVideo.addEventListener("canplaythrough", () => {
      setVideoFullyLoaded(true);
      console.log("Video fully loaded in background");
    });
    
    preloadVideo.load();
  }, []);

  // Handle video playback when slide changes
  useEffect(() => {
    const currentSlide = slides[currentIndex];
    if (currentSlide.type === "video" && videoRef.current && videoFullyLoaded) {
      if (isPlaying) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((e) => {
            console.log("Play failed:", e);
          });
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [currentIndex, isPlaying, videoFullyLoaded]);

  // Handle video mute/unmute
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Control autoplay based on current slide
  useEffect(() => {
    if (swiperRef.current) {
      if (currentIndex === 0 && slides[0].type === "video") {
        swiperRef.current.autoplay?.stop();
      } else {
        swiperRef.current.autoplay?.start();
      }
    }
  }, [currentIndex]);

  // Auto-advance when video ends
  useEffect(() => {
    const video = videoRef.current;
    if (currentIndex === 0 && slides[0].type === "video" && video) {
      const handleVideoEnded = () => {
        if (swiperRef.current) {
          swiperRef.current.slideNext();
        }
      };
      video.addEventListener("ended", handleVideoEnded);
      return () => {
        video.removeEventListener("ended", handleVideoEnded);
      };
    }
  }, [currentIndex]);

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentIndex(swiper.activeIndex);
    setVideoLoaded(false);
  };

  const handleSwiperInit = (swiper: SwiperType) => {
    swiperRef.current = swiper;
    // Start with first slide (image), not the video
    if (swiper && slides[0].type === "video") {
      swiper.slideTo(1, 0); // Skip to first image slide immediately
    }
  };

  const togglePlayPause = () => {
    console.log("Toggle play/pause called, current state:", isPlaying);
    console.log("Video ref:", videoRef.current);
    
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            setIsPlaying(true);
          }).catch((error) => {
            console.log("Play error:", error);
          });
        }
      }
    } else {
      console.log("Video ref is null");
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const handleVideoCanPlay = () => {
    setVideoLoaded(true);
    if (isPlaying && videoRef.current && videoFullyLoaded) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleVideoRef = (element: HTMLVideoElement | null) => {
    if (element && videoFullyLoaded) {
      videoRef.current = element;
      // Copy the loaded data from preload video to the actual video element
      if (preloadVideoRef.current && preloadVideoRef.current.readyState >= 3) {
        element.src = slides[0].src;
        element.load();
        element.play().catch(() => {});
      }
    } else if (element) {
      videoRef.current = element;
    }
  };

  // Restart video when coming back to video slide
  useEffect(() => {
    if (currentIndex === 0 && videoRef.current && videoFullyLoaded) {
      videoRef.current.currentTime = 0;
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      }
    }
  }, [currentIndex, videoFullyLoaded]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        onSwiper={handleSwiperInit}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={600}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: false }}
        onSlideChange={handleSlideChange}
        className="w-full h-full"
        allowTouchMove={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Media */}
              {slide.type === "image" ? (
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              ) : (
                <>
                  <video
                    ref={index === 0 ? handleVideoRef : null}
                    src={slide.src}
                    autoPlay={false}
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover cursor-pointer"
                    onCanPlay={index === 0 ? handleVideoCanPlay : undefined}
                  />
                  {!videoLoaded && index === 0 && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 border-3 border-white/30 border-t-secondary rounded-full animate-spin mx-auto mb-3" />
                        <p className="text-white/70 text-sm">Loading video...</p>
                      </div>
                    </div>
                  )}
                </>
              )}
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
              
              {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-4 bottom-80 xl:top-70 xl:items-start xl:justify-center xl:left-12 ">
                <motion.div
                  key={`title-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <h2 className="text-3xl md:text-5xl text-center xl:text-5xl font-primary text-white mb-2">
                    {slide.title}
                  </h2>
                </motion.div>
                <motion.div
                  key={`location-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <p className="text-white/90 text-center text-lg md:text-xl mb-2">{slide.location}</p>
                </motion.div>
                <motion.div
                  key={`desc-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <p className="text-white/70 text-center md:text-lg">{slide.description}</p>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="swiper-button-prev !cursor-pointer"></div>
      <div className="swiper-button-next !cursor-pointer"></div>

      {/* Custom Slide Indicators */}
      <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 cursor-pointer h-2 rounded-full ${
              currentIndex === index
                ? slide.type === "video"
                  ? "w-16 bg-gradient-to-r from-red-500 to-orange-500"
                  : "w-12 bg-secondary"
                : slide.type === "video"
                ? "w-8 bg-white/40 hover:bg-red-500/60"
                : "w-8 bg-white/40 hover:bg-secondary/60"
            }`}
          >
            <span className="sr-only">Slide {index + 1}</span>
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 left-8 z-20 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full">
        <span className="text-white text-sm">
          {String(currentIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Media Type Indicator */}
      {/* <div className="absolute top-8 left-8 z-20 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
        {slides[currentIndex]?.type === "video" ? (
          <div className="flex items-center gap-2">
            <Film size={14} className="text-red-500" />
            <span className="text-white text-xs">
              Video Tour {!isPlaying && "(Paused)"}
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <ImageIcon size={14} className="text-secondary" />
            <span className="text-white text-xs">Image Gallery</span>
          </div>
        )}
      </div> */}

      {/* Video Controls - Only for video slide */}
      {slides[currentIndex]?.type === "video" && (
        <div className="absolute bottom-8 right-8 z-20 flex gap-3">
          <button
            onClick={togglePlayPause}
            className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-black/70 transition-all duration-300 hover:scale-110 cursor-pointer"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={20} className="text-white" /> : <Play size={20} className="text-white" />}
          </button>
          <button
            onClick={toggleMute}
            className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-black/70 transition-all duration-300 hover:scale-110 cursor-pointer"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={20} className="text-white" /> : <Volume2 size={20} className="text-white" />}
          </button>
        </div>
      )}

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          background: rgba(0, 0, 0, 0.5);
          width: 50px !important;
          height: 50px !important;
          border-radius: 50%;
          backdrop-filter: blur(4px);
          transition: all 0.3s ease;
          cursor: pointer !important;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(0, 0, 0, 0.7);
          transform: scale(1.1);
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px !important;
        }
        .swiper-pagination {
          display: none !important;
        }
        video {
          background-color: #000;
          width: 100%;
          height: 100%;
          object-fit: cover;
          cursor: pointer;
        }
        button {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default HeroCarousel;