import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import PhotoGrid from "./components/PhotoGrid";

const UnsplashApp: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [photos, setPhotos] = useState<string[]>([]);
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([]);

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    if (query) {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: {
              query,
              per_page: 12,
              client_id: "vKJl8xlZvdh9_yGXkAtoiZzERcTkuQkd2A1Ie2wdFP4",
            },
          }
        );
        const newPhotos = response.data.results.map(
          (photo: any) => photo.urls.small
        );
        setPhotos(newPhotos);
      } catch (error) {
        console.error("Error fetching photos:", error);
        setPhotos([]);
      }
    } else {
      setPhotos([]);
    }
  };

  const handlePhotoSelect = (photoUrl: string) => {
    if (!selectedPhotos.includes(photoUrl)) {
      setSelectedPhotos([...selectedPhotos, photoUrl]);
    }
  };

  const handlePhotoDownload = async (photoUrl: string) => {
    try {
      const response = await axios.get(photoUrl, {
        responseType: "blob", // Set response type to blob (for downloading file)
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `photo.jpg`);
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
    } catch (error) {
      console.error("Error downloading photo:", error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {photos.length > 0 ? (
        <PhotoGrid
          photos={photos}
          onPhotoSelect={handlePhotoSelect}
          onPhotoDownload={handlePhotoDownload}
        />
      ) : (
        <p>No photos found for '{searchQuery}'</p>
      )}
      {selectedPhotos.length > 0 && (
        <div>
          <h2>Selected Photos</h2>
          {selectedPhotos.map((selectedPhoto) => (
            <img
              key={selectedPhoto}
              src={selectedPhoto}
              alt="Selected"
              className="selected-photo"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UnsplashApp;
