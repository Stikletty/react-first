import React from "react";
import "./Tweet.css";

function Twitter(props) {
  return (
    <div className="tweet">
      <h3 className="tweetHeader">{props.header}</h3>
      <div className="tweetBody">
        {props.text}
        <div className="tweetImgBox">
          <img
            className="tweetImg"
            src={props.imageUrl}
            alt="Placeholder animal"
          ></img>
        </div>
      </div>
      <div className="tweetFooter">Retweets ({props.retweets})</div>
    </div>
  );
}

export default Twitter;
