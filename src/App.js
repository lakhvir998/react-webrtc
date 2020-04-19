import React, {useRef, useEffect} from 'react';
import Video from './components/Video';
import { playVideoFromCamera } from './utils/common';

import './App.css';

function App() {
  const localVideoRef = useRef(null);
  useEffect(() => {
    playVideoFromCamera(localVideoRef.current);
    
  },[])

  const handleClick = () => {
    const canvas = document.querySelector('canvas');
    const video = localVideoRef.current;
    canvas.width = 480;
    canvas.height = 360;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
  }

  return (
    <div className="App">
     <Video videoRef={localVideoRef} id="localVideo"/>
      <canvas/>
      <div>
        <button onClick={handleClick}>Screenshot</button>
        <button id="record" disabled>Start Recording</button>
        <button id="play" disabled>Play</button>
        <button id="download" disabled>Download</button>
      </div>
    </div>
  );
}

export default App;
