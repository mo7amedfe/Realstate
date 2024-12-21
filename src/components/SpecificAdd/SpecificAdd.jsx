import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Slider from "react-slick";
import image from './../../assets/Spiderman Neon Edition.jpg'
import styles from "./SpecificAdd.module.css";
import Footer from '../Footer/footer';

export default function SpecificAdd() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "imageContainer"
  };

  let id = useParams().id


  function getData() {
    return axios.get(`http://localhost:5000/api/properties/Properties/${id}`)
  }

  let { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["SpecificAdd"],
    queryFn: getData
  })

  console.log(data);



  return (<>
    <div className="container">
      <div className={styles.row}>

        <div className={styles.sliderContainer}>
          <Slider {...settings}>

            <img src={`http://localhost:5000/api/images/image/${id}`} alt="" />
            <img src={`http://localhost:5000/api/images/image/${id}`} alt="" />


          </Slider>

        </div >
        <div className={styles.addDetails}>
          <h2>{data?.data.title}</h2>

          <h4><i className="fa-solid fa-location-dot"></i> {data?.data.location}</h4>

          <p className={styles.desc}>{data?.data.description}</p>

          <div className={styles.specs}>
            <div className={styles.spec}><h3>Property</h3> <p>{data?.data.property}</p></div>
            <div className={styles.spec}><h3>Type</h3> <p>{data?.data.type}</p></div>
            <div className={styles.spec}><h3>Bedroom</h3> <p>{data?.data.bedroom}</p></div>
            <div className={styles.spec}><h3>Area</h3> <p>{data?.data.area}</p></div>
            <div className={`border-right-none ${styles.spec}`}><h3>Price</h3> <p>{data?.data.price} {data?.negotiationable ? "negotiationable" : ""}</p></div>
          </div>

          <div className={styles.seller}>
            <h3>Seller Info</h3>

            <h5>Seller name: <span> {data?.data.createdBy?.name}</span></h5>

            <h5>Seller Email: <span> {data?.data.createdBy?.email}</span></h5>

          </div>


        </div>

      </div>

    </div >

    <Footer />
  </>
  )
}
