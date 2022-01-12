import { GoMute, GoUnmute } from 'react-icons/go';
import { useRef, useState, useEffect } from 'react';
import { VideoWrap, SoundAction } from './PostStyles';

const PostVideo = ({ src }) => {
  const videoRef = useRef();
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (muted) {
      videoRef.current.muted = true;
    } else {
      videoRef.current.muted = false;
    }
  }, [muted]);

  return (
    <VideoWrap>
      <video ref={videoRef} autoPlay loop muted>
        <source src={src} type="video/mp4" />
      </video>
      <SoundAction onClick={() => setMuted(!muted)}>
        {muted ? <GoMute /> : <GoUnmute />}
      </SoundAction>
    </VideoWrap>
  );
};

export default PostVideo;
