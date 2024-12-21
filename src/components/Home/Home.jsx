import React from 'react';
import styles from './Home.module.css';
import AllAdds from '../AllAdds/AllAdds';
import Footer from '../Footer/footer';
import Search from '../Search/Search';


export default function Home() {
  return (
    <>
      <div className={`container ${styles.container}`}>

        <div className={styles.row}>

          <Search />


        </div>
        <AllAdds />

      </div>

      <Footer />
    </>

  )
}

