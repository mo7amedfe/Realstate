import React, { useContext, useEffect, useState } from "react";
import styles from "./Profile.module.css";
import { TokenContext } from "../../Context/TokenContext";
import { jwtDecode } from "jwt-decode";
import Footer from "../Footer/footer";
import { Link } from 'react-router-dom';
import image from './../../assets/user-6380868_1280.png'


import axios from "axios";
import UploadBtn from "../UploadBtn/UploadBtn";

export default function Profile() {
  const [Object, setObject] = useState(null)
  const { Token } = useContext(TokenContext);

  useEffect(() => {
    if (Token) {
      let decoded = jwtDecode(Token)
      change(decoded)
    }

    GetPosts()

  }, [Token])

  function change(decoded) {

    setObject(decoded)

    setUser(
      {
        role: Object?.role,
        "name": Object?.name,
        email: Object?.email,
        Phone: Object?.phoneNumber
      })
  }


  const [Posts, setPosts] = useState([])




  async function GetPosts() {
    let decoded = jwtDecode(Token)
    console.log(decoded.userId);

    return await axios.get(`http://localhost:5000/api/properties/Properties/user/${decoded.userId}`
    ).then(res => {
      console.log(res);
      setPosts(res.data)

    }).catch(e => {
      console.log(e);

    })
  }


  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    profilePicture: image, // Placeholder image,
    Phone: "010000000",
    role: "user"

  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUser((prevUser) => ({
          ...prevUser,
          profilePicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (<>
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <img src={image} className={styles.profilePicture}/>
        <h2 className={styles.profileName}>{user.name}</h2>
        <p className={styles.profileEmail}>{user.email}</p>
        <p className={styles.profileEmail}>{user.Phone}</p>
        <p className={styles.profileEmail}>{user.role}</p>


        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className={styles.filesInput}
        />
        <button className={styles.editButton}>Edit Profile</button>
      </div>
    </div>
    <div className="mt-4">

      <div className={styles.allAds}>
        <h2>All Adds</h2>
        {Posts.map(add =>
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
            <UploadBtn id={add._id} />
          </div>
        )
        }
      </div>
    </div >
    <Footer />
  </>
  );
}
