import { useState } from "react";
import "./App.css";
import Videos from "./components/Videos";

function App() {
  //Harcoded Videos
  //Alternate Way is to use fetch api to fetch the Video
  //From API or From Server
  const videoSource = [
    {
      url: "./videos/1.mp4",
      channelname: "Youtube",
      channelLogo: "./avatar.png",
      videoname: "Youtube Shorts Clone",
    },
    {
      url: "./videos/2.mp4",
      channelname: "Youtube",
      channelLogo: "./avatar.png",
      videoname: "Youtube Shorts Clone",
    },
    {
      url: "./videos/3.mp4",
      channelname: "Youtube",
      channelLogo: "./avatar.png",
      videoname: "Youtube Shorts Clone",
    },
    {
      url: "./videos/4.mp4",
      channelname: "Youtube",
      channelLogo: "./avatar.png",
      videoname: "Youtube Shorts Clone",
    },
    {
      url: "./videos/5.mp4",
      channelname: "Youtube",
      channelLogo: "./avatar.png",
      videoname: "Youtube Shorts Clone",
    },
    {
      url: "./videos/6.mp4",
      channelname: "Youtube",
      channelLogo: "./avatar.png",
      videoname: "Youtube Shorts Clone",
    },
  ];

  // const { videos, setVideos } = useState();

  return (
    <>
      <Videos videos={videoSource} />
    </>
  );
}

export default App;
