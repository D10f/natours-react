const BgVideo = (src) => {
  return (
    <aside className="background-video">
      <video className="background-video__content" autoPlay muted loop>
        <source src={`${src}.webm`} type="video/webm" />
        <source src={`${src}.mp4`} type="video/mp4" />
      </video>
    </aside>
  );
};

export default BgVideo;
