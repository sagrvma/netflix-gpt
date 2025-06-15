const VideoTitle = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button>Play</button>
      <button>More Info</button>
    </div>
  );
};

export default VideoTitle;
