import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from 'react-player/lazy';
import './VideoEmbed.css';

const YoutubeEmbed = ({ embedId, imgSrc }) => (
  <div className="player-wrapper">
    <ReactPlayer
      url={`https://noembed.com/embed&url=https://www.youtube.com/embed/${embedId}`}
      // url={`https://www.youtube.com/embed/${embedId}`}
      width="640"
      height="480"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      // light={imgSrc}
    />
    {/* <iframe
      width="480"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    /> */}
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default YoutubeEmbed;