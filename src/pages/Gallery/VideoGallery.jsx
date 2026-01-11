import React, { useState } from "react";
import { videosImg } from "../../assets/assets";
import {
  FaPlay,
  FaTimes,
  FaUniversity,
  FaUsers,
  FaRunning,
  FaFlask,
} from "react-icons/fa";

const videoData = [
  {
    id: 1,
    title: "Campus Tour 2025",
    icon: FaUniversity,
    thumbnail: videosImg.video1,
    videoUrl: "https://pixabay.com/videos/hanover-campus-90933/", // Replace with actual video IDs
  },
  {
    id: 2,
    title: "Student Life Highlights",
    icon: FaUsers,
    thumbnail: videosImg.video2,
    videoUrl: "../src/assets/video2.mp4",
  },
  {
    id: 3,
    title: "Annual Sports Day",
    icon: FaRunning,
    thumbnail: videosImg.video4,
    videoUrl: "../src/assets/video3.mp4",
  },
  {
    id: 4,
    title: "Science Fair 2025",
    icon: FaFlask,
    thumbnail: videosImg.video4,
    videoUrl: "../src/assets/video4.mp4",
  },
];

const VideoGallery = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  return (
    <section className="py-20 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 data-aos="fade-left" className="section_heading">
            Video Gallery
          </h2>
          <p data-aos="fade-right" className="section_sub_heading">
            Experience our school through motion and sound
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoData.map((video) => (
            <div
              data-aos="fade-up"
              key={video.id}
              className="group relative rounded-3xl overflow-hidden shadow-xl bg-white cursor-pointer"
              onClick={() => setPlayingVideo(video)}
            >
              {/* Thumbnail Container */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>

                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-2xl transform transition-transform duration-300 group-hover:scale-125">
                    <FaPlay className="ml-1" size={24} />
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex items-center gap-3">
                <span className="h-10 w-10 flex items-center justify-center text-white bg-teal-500 rounded-full">
                  <video.icon className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-1">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* --- VIDEO MODAL OVERLAY --- */}
        {playingVideo && (
          <div className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={() => setPlayingVideo(null)}
              className="absolute top-6 right-6 text-white hover:text-teal-400 transition-colors z-[210] cursor-pointer"
            >
              <FaTimes size={30} />
            </button>

            {/* Video Player Container */}
            <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in duration-300">
              <iframe
                className="w-full h-full"
                src={`${playingVideo.videoUrl}?autoplay=1`}
                title={playingVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoGallery;
