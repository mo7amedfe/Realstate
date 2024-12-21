import React, { useState } from 'react'
import styles from './AllAdds.module.css';
import image from './../../assets/Spiderman Neon Edition.jpg'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { TailSpin } from "react-loader-spinner";

export default function AllAdds() {



    function getAdds() {
        return axios.get("http://localhost:5000/api/properties/Properties")
    }

    let { data, isLoading, isError, error, isFetching } = useQuery({
        queryKey: ["AllAdds"],
        queryFn: getAdds
    })






    return (
        <>
            <div className="mt-4">
                <div className={styles.allAds}>
                    <h2>All Adds</h2>
                    
                    {data?.data.map(add =>
                        <div key={add._id} className={styles.addCard}>
                            <Link to={`/specificadd/${add._id}`}>

                                <div className={styles.imgContainer}>
                                    <img src={`http://localhost:5000/api/images/image/${add._id}`}  alt="" />
                                </div>
                                <div className={styles.addDesc}>
                                    <h3>{add.title}</h3>
                                    <p><span><i className="fa-solid text-yellow fa-location-dot"></i></span> <span>{add.location}</span></p>

                                    <p><span className='text-blue'>Type:</span>  <span>{add.type}</span> </p>
                                    <p ><span className='text-blue'> price: </span>{add.price} {add.negotiationable?<span className='text-red'>Negotiationable</span>:<></>}</p>
                                </div>
                            </Link>

                        </div>

                    )

                    }
                </div>
            </div >
        </>
    )
}
