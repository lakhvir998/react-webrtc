import React  from 'react';

const Video = ({videoRef,id}) => {
    return (
        <video ref={videoRef} id={id} autoPlay playsInline controls={false}/>
    );
}

export default Video;