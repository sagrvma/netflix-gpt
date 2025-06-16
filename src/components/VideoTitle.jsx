const VideoTitle = ({ title, description }) => {
  return (
    <div className="video-title">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <button className="play-button">Play</button>
      <button className="more-info-button">More Info</button>
    </div>
  );
};

export default VideoTitle;
