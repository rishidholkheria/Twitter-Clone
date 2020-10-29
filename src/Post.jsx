import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import React from "react";
import "./Post.css";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              John Cena{" "}
              <span>{<VerifiedUserIcon className="post__badge" />}
              {"  "}
              @cenajohnvala
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>
              Hey how are you....? Hey how are you....? Hey how are you....?{" "}
            </p>
          </div>
        </div>
        <img
          src="https://fsb.zobj.net/crop.php?r=d1x_8GdV9LUMw2MFitUtgzxT0elvwafyaO8m2Mb380oiFmqK1oVd_hkXDz48W_EzEBHWK0Dz6n0Y1p_oCx6Mfe3UmgSzRODfXiL-u9wlO2VXe8RFC8aEjSMxWO2S6MD_ImK2CFNycGraGr9S"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
