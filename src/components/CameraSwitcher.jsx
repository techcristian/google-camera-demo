import { useEffect, useRef, useState } from 'react';

export default function CameraSwitcher() {
  const videoRef = useRef(null);
  const [facingMode, setFacingMode] = useState('user'); // 'user' = frontal, 'environment' = trasera

  useEffect(() => {
    startCamera(facingMode);
    return () => stopCamera();
  }, [facingMode]);

  const startCamera = async (mode) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { exact: mode } },
        audio: false
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accediendo a la cámara:", err);
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  const toggleCamera = () => {
    setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'));
  };

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline style={{ width: '100%', maxWidth: '400px' }} />
      <button onClick={toggleCamera}>
        Cambiar a cámara {facingMode === 'user' ? 'trasera' : 'frontal'}
      </button>
    </div>
  );
}
