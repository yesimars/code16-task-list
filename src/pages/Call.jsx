import React, { useState } from 'react'
import { AiFillAlert } from "react-icons/ai";

function Call() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio('./call/audio.mp3'));

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='text-center text-danger '>
      <AiFillAlert onClick={toggleAudio} style={{ fontSize: "15rem" }} />
      <p className='fs-3 text'>Acil çağrı butonudur. </p>
      <input className='fs-5 text border rounded-5' placeholder='Konum Gir'/>
      <button onClick={alert} className='btn btn-danger ms-3 rounded-5'>Paylaş</button>
    </div>
  )
}

export default Call