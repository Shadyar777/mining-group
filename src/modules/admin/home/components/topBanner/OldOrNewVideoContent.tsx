type OldOrNewVideoContentProps = {
  newVideoSrc?: string;
  oldVideoSrc?: string;
};
const OldOrNewVideoContent = ({
  oldVideoSrc,
  newVideoSrc,
}: OldOrNewVideoContentProps) => {
  if (newVideoSrc) {
    return (
      <video autoPlay loop muted className='banner-video' key={newVideoSrc}>
        <source src={newVideoSrc} type='video/mp4' />
      </video>
    );
  }
  if (oldVideoSrc) {
    return (
      <video autoPlay loop muted className='banner-video' key={oldVideoSrc}>
        <source src={oldVideoSrc} type='video/mp4' />
      </video>
    );
  }
};

export default OldOrNewVideoContent;
