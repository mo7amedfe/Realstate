import React, { useState, useEffect } from "react";
import styles from "./Sell.module.css";

export default function Sell() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  useEffect(() => {
    console.log(selectedImages);
  }, [selectedImages]);


  

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to an array
    const newPreviews = files.map((file) => URL.createObjectURL(file)); // Generate previews

    setSelectedImages((prev) => [...prev, ...files]); // Add new files to existing state
    setPreviews((prev) => [...prev, ...newPreviews]); // Add new previews to existing state
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedImages.length === 0) {
      alert("No images selected!");
      return;
    }

    const formData = new FormData();
    selectedImages.forEach((image, index) => {
      formData.append(`image_${index}`, image); // Append each image with a unique key
    });

    fetch("https://example.com/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then(() => {
        alert("Images uploaded successfully!");
        setSelectedImages([]);
        setPreviews([]);
      })
      .catch((error) => {
        console.error("Error uploading images:", error);
      });
  };

  const handleRemoveImage = (index) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index)); // Remove image from state
    setPreviews((prev) => prev.filter((_, i) => i !== index)); // Remove preview from state
  };

  return (
    <div className="container">
      <h2>Multiple Image Uploader</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          multiple // Allow multiple file selection
          onChange={handleImageChange}
        />
        {previews.length > 0 && (
          <div className={styles["preview-container"]}>
            <h3 className={styles["preview-header"]}>Preview</h3>
            <div className={styles["preview-grid"]}>
              {previews.map((preview, index) => (
                <div className={styles["preview-item"]} key={index}>
                  <img src={preview} alt={`Preview ${index}`} />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="w-50">
          <button type="submit">Upload Images</button>

        </div>
      </form>
    </div>
  );
}
