import React from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";

const Feed = () => {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h1>Home</h1>
      </div>

      {/* Tweet Box */}
      <TweetBox />

      {/* Post */}
      {/* <Post/>
      <Post/>
      <Post/>
      <Post/> */}

    </div>
  );
};

export default Feed;
