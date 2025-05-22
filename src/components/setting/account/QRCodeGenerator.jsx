import React, { useEffect, useState } from "react";
import QRCode from "qrcode";

const QRCodeGenerator = ({ text }) => {
  const [qrUrl, setQrUrl] = useState("");

  useEffect(() => {
    if (text) {
      QRCode.toDataURL(text)
        .then((url) => {
          setQrUrl(url);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [text]);

  return (
    <div className="w-full flex items-center justify-center">
      <div className="border rounded-md">
        {qrUrl && <img src={qrUrl} alt="QR Code" className="w-48" />}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
