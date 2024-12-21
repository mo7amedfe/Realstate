import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UploadBtn = ({ id }) => {
  const [image, setImage] = useState(null);
  const [responseMessage, setResponseMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!id || !image) {
      setResponseMessage('Please provide an ID and an image.');
      setMessageColor('red');
      return;
    }

    const formData = new FormData();
    formData.append('id', id);
    formData.append('image', image);

    try {
      const response = await fetch('http://localhost:5000/api/images/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage(`Success: ${result.message}`);
        setMessageColor('green');
      } else {
        setResponseMessage(`Error: ${result.error}`);
        setMessageColor('red');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setResponseMessage('An unexpected error occurred.');
      setMessageColor('red');
    }
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Select Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </label>
        <br /><br />
        <button type="submit">Upload Image</button>
      </form>
      {responseMessage && (
        <div style={{ marginTop: '20px', color: messageColor }}>
          {responseMessage}
        </div>
      )}
    </div>
  );
};



export default UploadBtn;
