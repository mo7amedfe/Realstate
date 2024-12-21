import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import styles from './Search.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import image from './../../assets/Spiderman Neon Edition.jpg';

export default function Search() {
    const [adds, setAdds] = useState([]);

    async function handleSearch(values) {
        try {
            const response = await axios.get('http://localhost:5000/api/properties/search', {
                params: {
                    min_price: values.minPrice || 0,
                    max_price: values.maxPrice || 1000000000000,
                    type: values.type || '',
                    property: values.property || '',
                    bedroom: values.bedroom || '',
                },
            });
            setAdds(response.data);
            console.log(response);

        } catch (error) {
            console.error('Error fetching properties:', error);
        }
    }

    return (
        <>
            <div className={styles.row}>
                <Formik
                    initialValues={{
                        type: '',
                        property: '',
                        minPrice: '',
                        maxPrice: '',
                        bedroom: '',
                    }}
                    onSubmit={(values) => handleSearch(values)}
                >
                    {() => (
                        <Form className={styles.form}>
                            <div className={styles.locationSearch}>
                                <Field
                                    type="text"
                                    name="location"
                                    placeholder="Search Location"
                                    className={styles.locationInput}
                                />
                                <button type="submit" className="btn-green">
                                    Search
                                </button>
                            </div>

                            <div className={styles.items}>
                                <div className={styles.item}>
                                    <label htmlFor="type">Type</label>
                                    <Field as="select" name="type" id="type">
                                        <option value="">Any</option>
                                        <option value="buy">Buy</option>
                                        <option value="rent">Rent</option>
                                    </Field>
                                </div>

                                <div className={styles.item}>
                                    <label htmlFor="property">Property</label>
                                    <Field as="select" name="property" id="property">
                                        <option value="">Any</option>
                                        <option value="apartment">Apartment</option>
                                        <option value="house">House</option>
                                        <option value="studio">Studio</option>
                                        <option value="land">Land</option>
                                    </Field>
                                </div>

                                <div className={styles.item}>
                                    <label htmlFor="minPrice">Min Price</label>
                                    <Field
                                        type="number"
                                        id="minPrice"
                                        name="minPrice"
                                        placeholder="Any"
                                    />
                                </div>

                                <div className={styles.item}>
                                    <label htmlFor="maxPrice">Max Price</label>
                                    <Field
                                        type="number"
                                        id="maxPrice"
                                        name="maxPrice"
                                        placeholder="Any"
                                    />
                                </div>

                                <div className={styles.item}>
                                    <label htmlFor="bedroom">Bedroom</label>
                                    <Field
                                        type="number"
                                        id="bedroom"
                                        name="bedroom"
                                        placeholder="Any"
                                    />
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>


            <div className={styles.allAds}>
                {adds.map((add) => (
                    <div key={add._id} className={styles.addCard}>
                        <Link to={`/specificadd/${add._id}`}>

                            <div className={styles.imgContainer}>
                                <img src={`http://localhost:5000/api/images/image/${add._id}`} alt="" />
                            </div>
                            <div className={styles.addDesc}>
                                <h3>{add.title}</h3>
                                <p><span><i className="fa-solid text-yellow fa-location-dot"></i></span> <span>{add.location}</span></p>

                                <p><span className='text-blue'>Type:</span>  <span>{add.type}</span> </p>
                                <p ><span className='text-blue'> price: </span>{add.price} {add.negotiationable ? <span className='text-red'>Negotiationable</span> : <></>}</p>
                            </div>
                        </Link>

                    </div>

                ))}
            </div>

        </>
    );
}
