
import React, { useEffect, useState } from 'react';
import styles from "./Sell.module.css"

export default function Sell() {

  const [imgs, setImgs] = useState([]);

  const [previews, setPreviews] = useState([]);

  useEffect(() => {
    const newPreviews = imgs.map((img) => URL.createObjectURL(img));
    setPreviews(newPreviews);

    // Cleanup URLs to prevent memory leaks

    return () => newPreviews.forEach((url) => URL.revokeObjectURL(url));
  }, [imgs]);

  function handleFileChange(e) {


    const selectedFiles = Array.from(e.target.files);
    const imageFiles = selectedFiles.filter((file) => file.type.startsWith('image/'));

    if (imageFiles.length !== selectedFiles.length) {
      alert('Only image files are allowed!');
    }

    setImgs(imageFiles); // Update state only with valid image files
  }

  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTextAreaChange = (e) => {
    const inputText = e.target.value;
    const words = inputText.split(/\s+/).filter((word) => word.length > 0); // Split text into words
    if (words.length <= 100) {
      setText(inputText);
      setWordCount(words.length);
    } else {
      alert('You can only enter up to 100 words!');
    }
  };

  return (
    <div className="container">
      <div className={styles.fileInputContainer}>
        <input
          onChange={(e) => handleFileChange(e)}
          type="file"
          accept="image/*"
          multiple
          className={styles.FilesInput}
        />


      </div>

      <div className={styles.previews}>
        {previews.map((preview, index) => (
          <img key={index} src={preview} alt={`Preview ${index}`} />
        ))}
      </div>

      <div className={styles.locationSearch}>
        <input type="text" placeholder='Title' />

        <input type="text" placeholder='Location' />

        {/* <button className='btn-green'>Search</button> */}
        <textarea onClick={(e) => { handleTextAreaChange(e) }} rows={10} cols={1000} placeholder='You can type up to 100 words to describe your add' name="" id=""></textarea>

      </div>



      <div className={styles.items}>

        <div class={styles.item}>
          <div className="w-100">
            <label for="property">Property</label>

          </div>

          <select name="property" id="property">
            <option value="" selected="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="house">Studio</option>
            <option value="land">Land</option></select>
        </div>



        <div class={styles.item}>
          <div className="w-100">
            <label for="type">Type</label>

          </div>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="buy" selected="">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>





        <div class={styles.item}>
          <div className="w-100">
            <label for="bedroom">Bedroom</label>

          </div>
          <input type="number" id="bedroom" name="bedroom" placeholder="any" />
        </div>


        <div class={styles.item}>
          <div className="w-100">
            <label for="Area">Area</label>

          </div>
          <input type="number" id="Area" name="Area" placeholder="any" />
        </div>


        <div class={`${styles.item}  `}>
          <div className={`${styles.priceContainer}`}>

            <div className={styles.labelContainer}>
              <label for="Price">Price </label>
              {/* <label htmlFor="">negatiationable</label> */}
            </div>

            <input className={styles.priceInput} type="number" id="Price" name="Price" placeholder="any" />
            <p>negatiationable</p>
            <input className={styles.checkBox} type="checkbox" />

          </div>

        </div>



      </div>

      <div className={styles.btnContainer}>
        <button className='btn-green'>Publish</button>
      </div>


    </div>
  );
}
