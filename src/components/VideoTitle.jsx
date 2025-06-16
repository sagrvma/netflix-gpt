const VideoTitle = ({ title, description }) => {
  return (
    <div className="video-title">
      <div className="video-title-text">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <div className="video-title-buttons">
        <button className="play-button">▶ Play</button>
        <button className="more-info-button">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
