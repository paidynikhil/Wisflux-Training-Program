import React from "react";

interface PhotoGridProps {
  photos: string[];
  onPhotoSelect: (photoUrl: string) => void;
  onPhotoDownload: (photoUrl: string) => void;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({
  photos,
  onPhotoSelect,
  onPhotoDownload,
}) => {
  const handlePhotoSelect = (photoUrl: string) => {
    onPhotoSelect(photoUrl);
  };

  const handlePhotoDownload = (photoUrl: string) => {
    onPhotoDownload(photoUrl);
  };

  return (
    <div className="photo-grid">
      {photos.map((photoUrl) => (
        <div key={photoUrl} className="photo-container">
          <img src={photoUrl} alt="Unsplash" className="photo" />
          <div className="button-container">
            <button onClick={() => handlePhotoSelect(photoUrl)}>Select</button>
            <button onClick={() => handlePhotoDownload(photoUrl)}>
              Download
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
