import React, { useRef, useEffect } from 'react';

const YouTubePlayer = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Autoplay and mute the video when component mounts
    if (iframeRef.current) {
      iframeRef.current.src += '&autoplay=1&mute=1';
    }

    // Function to pause the video and hide the iframe
    const pauseAndHideVideo = () => {
      // Pause the video
      iframeRef.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      // Hide the iframe
      iframeRef.current.style.display = 'none';
    };

    // Add event listener to window to pause and hide all YouTube videos
    window.addEventListener('blur', pauseAndHideVideo);

    return () => {
      // Clean up the event listener
      window.removeEventListener('blur', pauseAndHideVideo);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      className='w-full h-[100vh]'
      src="https://www.youtube.com/embed/GVljFVClyws?si=rEafBK-xZBhbAB11"
      title="YouTube video player"
      frameBorder="0"
    ></iframe>
  );
};

export default YouTubePlayer;
