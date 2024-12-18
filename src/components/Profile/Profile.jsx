import React, { useState } from "react";
import styles from "./Profile.module.css";
import image from './../../assets/Spiderman Neon Edition.jpg'

const Profile = () => {

    const [user, setUser] = useState({
        name: "John Doe",
        Phone: "01149360601",
        email: "johndoe@example.com",
        bio: "Web Developer passionate about creating intuitive user experiences.",
        profilePicture: "https://via.placeholder.com/150", // Placeholder image
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

    return (
        <div className="container">
            <div className={styles.profileCard}>

                <div className={styles.imageContainer}>
                    <img
                        src={user.profilePicture}

                        className={styles.profilePicture}
                    />
                </div>
                <div className={styles.profileData}>
                    <h2 className={styles.profileName}>{user.name}</h2>
                    <p className={styles.profileEmail}>{user.email}</p>
                    <p className={styles.profileEmail}>{user.Phone}</p>
                </div>

                <div className={styles.inputContainer}>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className={styles.filesInput}
                    />
                </div>


            </div>

            <h2>My Adds</h2>


            <div className={styles.allAds}>

                <div className={styles.addCard}>

                    <div className={styles.imgContainer}>
                        <img src={image} alt="" />
                    </div>
                    <div className={styles.addDesc}>
                        <h3>title</h3>
                        <p>5000000 </p>
                    </div>
                </div>
                <div className={styles.addCard}>

                    <div className={styles.imgContainer}>
                        <img src={image} alt="" />
                    </div>
                    <div className={styles.addDesc}>
                        <h3>title</h3>
                        <p>5000000 </p>
                    </div>
                </div>

                <div className={styles.addCard}>
                    <div className={styles.imgContainer}>
                        <img src={image} alt="" />
                    </div>
                    <div className={styles.addDesc}>
                        <h3>title</h3>
                        <p>5000000 </p>
                    </div>
                </div>
                <div className={styles.addCard}>
                    <div className={styles.imgContainer}>
                        <img src={image} alt="" />
                    </div>
                    <div className={styles.addDesc}>
                        <h3>title</h3>
                        <p>5000000 </p>
                    </div>
                </div>
                <div className={styles.addCard}>
                    <div className={styles.imgContainer}>
                        <img src={image} alt="" />
                    </div>
                    <div className={styles.addDesc}>
                        <h3>title</h3>
                        <p>5000000 </p>
                    </div>
                </div>

                <div className={styles.addCard}>
                    <div className={styles.imgContainer}>
                        <img src={image} alt="" />
                    </div>
                    <div className={styles.addDesc}>
                        <h3>title</h3>
                        <p>5000000 </p>
                    </div>
                </div>

                <div className={styles.addCard}>
                    <div className={styles.imgContainer}>
                        <img src={image} alt="" />
                    </div>
                    <div className={styles.addDesc}>
                        <h3>title</h3>
                        <p>5000000 </p>
                    </div>
                </div>

                <div className={styles.addCard}>
                    <div className={styles.imgContainer}>
                        <img src={image} alt="" />
                    </div>
                    <div className={styles.addDesc}>
                        <h3>title</h3>
                        <p>5000000 </p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Profile;