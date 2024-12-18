import React from "react";
import Styles from "./About.module.css";

export default function About() {
  return (
    <div className={Styles.Container}>
      <h4 className={Styles.m}>ABOUT RealEstate</h4>
      <div className={Styles.section1}>
        <h1 className={Styles.eddit1}>RealEstate</h1>
        <p className={Styles.eddit2}>
          RealEstate prides itself in creating a new standard in resort and
          residential living through its outstanding record of accomplishments.
          With an in-house design office that includes an expert team of
          architects and landscape designers, RealEstate’ holistic approach of
          building new communities embraces all practices from vision to design,
          construction, finishing and operation, which has allowed La Vista to
          continually deliver the highest standards to its clients. We have
          amassed a large client-base who believe in our expertise and in the
          strong investments made with a property purchase from RealEstate. This
          trust continues to fuel our drive to grow even further and
          successfully deliver on schedule several projects With more projects
          currently being developed.
        </p>

      </div>
      <div className={Styles.section2}>
        <h1 className={Styles.eddit1}>MESSAGE FROM THE CHAIRMAN</h1>
        <p className={Styles.eddit2}>
          We strive to build sustainable communities integrating Architectural
          designs with state of the art landscape. We promise our clients the
          perfect balance between privacy and social life, as we design and
          build a unique lifestyle. For more than 3 decades we, at RealEstate
          were able to build a strong bond with our distinguished clients based
          on trust and perfection. RealEstate team members are dedicated to
          fulfil the needs of our clients and to introduce the latest technology
          while sustaining a convenient environment for our residents to live.
        </p>
      </div>
      <div className={Styles.section3}>
        <div className={Styles.itm3}>
          <h1 className={Styles.eddit1}>Our Mission & Vision</h1>
        </div>
        <div className={Styles.itm1}>
          <h2>Mission</h2>
          <p>
            To lead the market by consistently providing the highest quality of
            design, finishing, landscape and operation services while achieving
            the higher return on investment.
          </p>
        </div>
        <div className={Styles.itm2}>
          <h2>Vision</h2>
          <p>
            We strive to provide our clients with an inspiring life style in
            safe communities and make it our goal to elevate the real estate
            market’s standards in Egypt through dedication, commitment and
            constantly meeting the clients expectations while offering
            excellence from start to finish and beyond.
          </p>
        </div>
      </div>
    </div>
  );
}
