import React from 'react';
import styles from './Home.module.css';
import image from './../../assets/Spiderman Neon Edition.jpg'


export default function Home() {
  return (
    <div className={`container ${styles.container}`}>

      <div className={styles.row}>


        <div className={styles.locationSearch}>
          <input type="text" placeholder='Search Location' />
          <button className='btn-green'>Search</button>
        </div>



        <div className={styles.items}>

          <div class={styles.item}>
            <label for="type">Type</label>
            <select name="type" id="type">
              <option value="">any</option>
              <option value="buy" selected="">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>

          <div class={styles.item}>
            <label for="property">Property</label>
            <select name="property" id="property">
              <option value="" selected="">any</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="house">Studio</option>
              <option value="land">Land</option></select>
          </div>

          <div class={styles.item}><label for="minPrice">Min Price</label>
            <input type="number" id="minPrice" name="minPrice" placeholder="any" />
          </div>
          <div class={styles.item}>
            <label for="maxPrice">Max Price</label>
            <input type="number" id="maxPrice" name="maxPrice" placeholder="any" />
          </div>
          <div class={styles.item}>
            <label for="bedroom">Bedroom</label>
            <input type="number" id="bedroom" name="bedroom" placeholder="any" />
          </div>

        </div>


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

    </div>
  )
}

