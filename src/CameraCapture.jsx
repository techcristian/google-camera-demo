import { useRef, useState, useEffect } from "react";

function CameraCapture() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error al acceder a la cámara:", error);
      }
    }

    startCamera();
  }, []);

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext("2d");
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageDataUrl = canvas.toDataURL("image/png");
      setCapturedImage(imageDataUrl);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Captura de cámara</h2>
      <video ref={videoRef} autoPlay playsInline style={{ width: "100%", maxWidth: 400 }} />
      <br />
      <button onClick={capturePhoto}>📸 Capturar Foto</button>
      <br />
      {capturedImage && (
        <div>
          <h3>Imagen capturada:</h3>
          <img src={capturedImage} alt="captura" style={{ maxWidth: 400 }} />
        </div>
      )}
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
}

export default CameraCapture;
