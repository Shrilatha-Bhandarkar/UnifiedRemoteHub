import React, { useEffect, useRef, useState } from 'react';
import CustomNavbar from '../components/navbar';

export default function WellBeing() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);
  const [isStarted, setIsStarted] = useState(false);
  const [audioElement, setAudioElement] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const timer = useRef();

  useEffect(() => {
    if (isStarted) {
      timer.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(timer.current);
  }, [isStarted]);

  useEffect(() => {
    if (selectedFile) {
      const audio = new Audio(URL.createObjectURL(selectedFile));
      setAudioElement(audio);
    }
  }, [selectedFile]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const playAudio = () => {
    if (audioElement) {
      audioElement.play();
      setIsAudioPlaying(true);
    }
  };

  useEffect(() => {
    if (!running && isAudioPlaying) {
      audioElement.pause();
      setIsAudioPlaying(false);
    }
  }, [running, isAudioPlaying, audioElement]);
  const handleStartClick = () => {
    setIsStarted(true);
  };


  return (
    <div>
      <CustomNavbar />
      <div className='stopwatch'>
        <p className='timer'>{format(time)}</p>
        <div className='actions'>
        <button onClick={() => setTime(0)}>Restart</button>
          <button
            onClick={() => {
              if (isStarted) {
                clearInterval(timer.current);
              }
              setRunning(!running);
              setIsStarted(false);
            }}
          >
            {running ? 'Stop' : 'Resume'}
          </button>
          <button onClick={handleStartClick}>Start</button>
          <div>
          <input type="file" onChange={handleFileChange} />
          <button onClick={playAudio}>Play Audio</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

const format = (time) => {
    let hours = Math.floor((time / 60 / 60) % 24);
  let minutes = Math.floor((time / 60) % 60);
  let seconds = Math.floor(time % 60);
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return hours + ':' + minutes + ':' + seconds;
 
};
