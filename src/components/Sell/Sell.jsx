import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from "./Sell.module.css";
import { TokenContext } from '../../Context/TokenContext';
import axios from 'axios';
import Footer from '../Footer/footer';

export default function Sell() {
  const [postImages, setPostImages] = useState([]);  // State to store multiple images
  const [previews, setPreviews] = useState([]);
  const { Token } = useContext(TokenContext);
  const [isNegotiationable, setIsNegotiationable] = useState(false)

  function handleCheckBoxClick() {
    setIsNegotiationable(!isNegotiationable)
  }

  const formik = useFormik({
    initialValues: {
      images: [],
      title: '',
      location: '',
      description: '',
      property: '',
      type: '',
      bedroom: '',
      area: '',
      price: '',
      negotiationable: isNegotiationable,
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      location: Yup.string().required('Location is required'),
      description: Yup.string()
        .max(100, 'You can only enter up to 100 words!')
        .required('Description is required'),
      property: Yup.string().required('Property type is required'),
      type: Yup.string().required('Type is required'),
      bedroom: Yup.number().required('Bedroom count is required'),
      area: Yup.number().required('Area is required'),
      price: Yup.number().required('Price is required'),
    }),
    onSubmit: async (values) => {
      console.log(values);
      
      const formData = new FormData();
      values.images.forEach((file) => formData.append('images', file));
      formData.append('title', values.title);
      formData.append('location', values.location);
      formData.append('description', values.description);
      formData.append('property', values.property);
      formData.append('type', values.type);
      formData.append('bedroom', values.bedroom);
      formData.append('area', values.area);
      formData.append('price', values.price);
      formData.append('negotiationable', isNegotiationable);

      await axios.post('http://localhost:5000/api/properties/Properties', formData, {
        headers: {
          Authorization: `Bearer ${Token}`,
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res);
      }).catch(e => {
        console.log(e);

      })

    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(postImages);
    console.log("Uploaded");
  };
  const handleFileUpload = async (e) => {
    const files = e.target.files;
    const base64Files = await Promise.all(
      Array.from(files).map((file) => convertToBase64(file))
    );
    setPostImages(base64Files);  // Update state with multiple base64 images
  };

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  return (<>
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.fileInputContainer}>
          <input
            type="file"
            accept="image/*"
            multiple
            className={styles.FilesInput}
            onChange={handleFileUpload}
          />
        </div>

        <div className={styles.previews}>
          {previews.map((preview, index) => (
            <img key={index} src={preview} alt={`Preview ${index}`} />
          ))}
        </div>

        <div className={styles.locationSearch}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.title && formik.errors.title ? <div>{formik.errors.title}</div> : null}

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formik.values.location}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.location && formik.errors.location ? <div>{formik.errors.location}</div> : null}

          <textarea
            name="description"
            rows={4}
            placeholder="You can type up to 100 words to describe your ad"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.description && formik.errors.description ? (
            <div>{formik.errors.description}</div>
          ) : null}
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <label htmlFor="property">Property</label>
            <select
              name="property"
              id="property"
              value={formik.values.property}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Any</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="studio">Studio</option>
              <option value="land">Land</option>
            </select>
            {formik.touched.property && formik.errors.property ? (
              <div>{formik.errors.property}</div>
            ) : null}
          </div>

          <div className={styles.item}>
            <label htmlFor="type">Type</label>
            <select
              name="type"
              id="type"
              value={formik.values.type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Any</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
            {formik.touched.type && formik.errors.type ? <div>{formik.errors.type}</div> : null}
          </div>

          <div className={styles.item}>
            <label htmlFor="bedroom">Bedroom</label>
            <input
              type="number"
              name="bedroom"
              id="bedroom"
              value={formik.values.bedroom}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.bedroom && formik.errors.bedroom ? (
              <div>{formik.errors.bedroom}</div>
            ) : null}
          </div>

          <div className={styles.item}>
            <label htmlFor="area">Area</label>
            <input
              type="number"
              name="area"
              id="area"
              value={formik.values.area}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.area && formik.errors.area ? <div>{formik.errors.area}</div> : null}
          </div>

          <div className={styles.item}>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.price && formik.errors.price ? <div>{formik.errors.price}</div> : null}
            <label>
              <input
                type="checkbox"
                name="negotiationable"
                onClick={() => {
                  handleCheckBoxClick
                }}

                // onChange={formik.handleChange}
                onChange={handleCheckBoxClick}

              />
              Negotiationable
            </label>
          </div>
        </div>

        <div className={styles.btnContainer}>
          <button type="submit" className="btn-green">
            Publish
          </button>
        </div>
      </form>
    </div>
    <Footer />

  </>
  );
}
