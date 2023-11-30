import React, { useEffect, useState } from 'react';
import "./Well.css"
const AudioCard = ({ running }) => {
  const [audioElement, setAudioElement] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

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
  }, [isAudioPlaying, audioElement]);
  

  return (
    <div className='audio-card'>
      <h2>Audio Player</h2>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={playAudio}>Play Audio</button>
      </div>
    </div>
  );
};

export default AudioCard;