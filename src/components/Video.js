import React, { useRef, useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaShare } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";

const Video = ({ video, id }) => {
  //State To Track Pause/Play
  const [playing, setPlaying] = useState(true);
  //State To Maintain the Pause/Play Button Click
  const [buttonClicked, setButtonClick] = useState(false);
  //Simple State to Count The Like
  const [likeCount, setLikeCount] = useState(0);
  //Video Ref
  const videoref = useRef();
  //Updating The Progress
  const handleProgress = (e) => {
    if (isNaN(e.target.duration)) {
      return;
    }
    //Calculation for progress bar
    //Simply converting the current time to percentage
    setProgress((e.target.currentTime / e.target.duration) * 100);
  };
  //
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    videoref.current.addEventListener("hover", () => {
      videoref.current.muted = false;
    });
  }, []);
  /** auto play */
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setButtonClick(false);
    }, 2500);

    return () => {
      setButtonClick(false);
      clearTimeout(timeoutID);
    };
  }, [playing]);

  //Handle Like Count
  const updateLikeCount = () => {
    setLikeCount(likeCount + 1);
  };
  //Handle Pause and Play On Click
  const handleVideoPlay = () => {
    const curState = !playing;
    const video = videoref.current;
    setButtonClick(true);
    setPlaying(!playing);
    if (curState === true) {
      video.muted = false;
      video.play();
    } else {
      video.pause();
    }
  };

  //Intersection Observer
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // if (videoref.muted == true) {
        //   videoref.current.muted = false;
        // }
        videoref.current.play();
      } else {
        videoref.current.pause();
        videoref.current.currentTime = 0;
      }
    }, options);

    observer.observe(videoref.current);

    return () => {
      observer.unobserve(videoref.current);
    };
  }, []);

  return (
    <div className="shorts-container" key={id} id={id}>
      {/* Video Container */}
      <div className="video-container">
        <video
          ref={videoref}
          src={video.url}
          onClick={handleVideoPlay}
          muted={true}
          onTimeUpdate={(e) => {
            handleProgress(e);
          }}
        ></video>
        <progress max="100" min="0" value={progress}></progress>
        <div
          className={buttonClicked ? "video-control animate" : "video-control"}
        >
          {!playing ? <FaPause /> : <FaPlay />}
        </div>

        <div className="video-info">
          <div className="video-channel">
            <img src={video.channelLogo} alt={"channel-name"} />
            <p>{video.channelname}</p>
            <button>Subscribe</button>
          </div>
          <p className="video-name">{video.videoname}</p>
        </div>
      </div>
      {/* Video Container */}

      <div className="shorts-info">
        <div className="info-box">
          <button
            onClick={updateLikeCount}
            className={likeCount > 0 ? "clicked" : ""}
          >
            <BiSolidLike style={{ margin: "auto" }} />
          </button>
          <span>{likeCount}</span>
        </div>
        <div className="info-box">
          <button>
            <BiSolidDislike style={{ margin: "auto" }} />
          </button>
          <span>Dislike</span>
        </div>
        <div className="info-box">
          <button>
            <IoChatboxEllipses style={{ margin: "auto" }} />
          </button>
          <span>0</span>
        </div>
        <div className="info-box">
          <button>
            <FaShare style={{ margin: "auto" }} />
          </button>
          <span>Share</span>
        </div>
        <div className="info-box">
          <button>
            <CiMenuKebab style={{ margin: "auto" }} />
          </button>
        </div>
        <div className="info-box">
          <img src={"/avatar.png"} alt={"channle-name"} />
        </div>
      </div>
    </div>
  );
};

export default Video;
