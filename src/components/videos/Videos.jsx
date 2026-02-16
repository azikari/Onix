import React, { useState, useEffect } from "react";
import { videoData } from "./videoData";
import decorLeft from '../../assets/images/videos-left-dec.png';
import decorRight from '../../assets/images/videos-right-dec.png';

const Videos = () => {
  const [activeVideo, setActiveVideo] = useState(videoData[0]);
  const [animVideo, setAnimVideo] = useState(videoData[0]);
  const [animate, setAnimate] = useState(false);

  const handleVideoClick = (video) => {
    if (video.id === activeVideo.id) return;
    setActiveVideo(video);
    setAnimate(true);
  };

  useEffect(() => {
    if (animate) {
      const timeout = setTimeout(() => setAnimate(false), 200);
      setAnimVideo(activeVideo);
      return () => clearTimeout(timeout);
    }
  }, [activeVideo, animate]);

  return (
    <section id="videos" className="scroll-mt-28 relative bg-white mt-16 py-16">
      <img src={decorLeft} alt="decor-left" className="absolute top-15 left-0 z-0" />
      <img src={decorRight} alt="decor-right" className="absolute top-0 right-0 z-0" />

      <div className="mx-auto relative z-10 flex flex-col lg:flex-row w-full max-w-[1300px] px-6 gap-8">
        <div className="relative w-full lg:flex-1 overflow-hidden aspect-video">
          <div className="absolute top-0 left-0 px-6 py-6 bg-[#ff695f] text-white font-semibold rounded-tl-3xl rounded-br-3xl z-20 flex flex-col w-max">
            <span className="text-base lg:text-lg">{activeVideo.tag}</span>
            <span className="text-sm lg:text-base font-normal mt-2">
              {activeVideo.title}
            </span>
          </div>

          {videoData.map((video) => (
            <iframe
              key={video.id}
              src={video.url}
              title={video.tag}
              className={`absolute inset-0 w-full h-full rounded-3xl transition-opacity duration-200 ${
                activeVideo.id === video.id
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0"
              }`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ))}
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-96 lg:h-[700px]">
          {videoData.map((video) => {
            const isActive = activeVideo.id === video.id;
            return (
              <div
                key={video.id}
                className="relative cursor-pointer overflow-hidden rounded-2xl h-40 lg:flex-1"
                onClick={() => handleVideoClick(video)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.tag}
                  className={`w-full h-full object-cover rounded-2xl transition-opacity duration-300 ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
                />

                {isActive && (
                  <div className="absolute inset-0 bg-[#ff695f] rounded-2xl flex flex-col justify-center items-center text-white font-semibold text-lg">
                    <div>{video.tag}</div>
                    <div className="text-base font-normal mt-2">
                      {video.title}
                    </div>
                  </div>
                )}

                {!isActive && (
                  <div className="absolute top-0 left-0 px-6 py-3 text-base font-semibold bg-[#ff695f] text-white rounded-tl-2xl rounded-br-2xl">
                    {video.tag}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Videos;
