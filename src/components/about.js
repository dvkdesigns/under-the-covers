import React from "react";
import "../styles/AboutUs.scss";

export const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us__content">
        <h2 className="about-us__title">About Us</h2>
        <p className="about-us__description">
          At Trash Bin Cleaning Services, we are passionate about making your
          home cleaner and safer through professional trash bin cleaning
          services. We know how unpleasant and unhygienic dirty trash bins can
          be, which is why we’ve made it our mission to eliminate odors, grime,
          and bacteria with our top-tier cleaning solutions.
        </p>
        <p className="about-us__description">
          Founded in 2024, our team is dedicated to providing environmentally
          friendly services that are both effective and affordable. Whether
          you're a homeowner, a business, or a property manager, our reliable
          team is here to ensure your trash bins stay clean year-round. Let us
          handle the dirty work, so you can enjoy a cleaner, fresher
          environment.
        </p>
        <p className="about-us__description">
          <b>Extend Our Cleanliness Commitment to Nearby Cities:</b> In addition
          to providing exceptional{" "}
          <a href="/parkland-fl">trash bin cleaning services in Parkland</a>,
          Florida, we're proud to offer our services to residents in the
          surrounding areas. We know how essential it is to keep bins hygienic,
          odor-free, and free from bacteria and pests. That’s why we bring our{" "}
          <a href="/coral-springs-fl">
            Trash Bin Cleaning Services in Coral Springs
          </a>
          ,{" "}
          <a href="/coconut-creek-fl">
            Trash Bin Cleaning Services in Coconut Creek
          </a>
          ,{" "}
          <a href="/deerfield-beach-fl">
            Trash Bin Cleaning Services in Deerfield Beach
          </a>
          ,{" "}
          <a href="/boca-raton-fl">Trash Bin Cleaning Services in Boca Raton</a>
          , and <a href="/margate-fl">Trash Bin Cleaning Services in Margate</a>{" "}
          right to your doorstep. Whether you’re in Parkland or a nearby city,
          our mission is to keep your bins—and your home—cleaner, safer, and
          smelling fresh.
        </p>
      </div>
      <div className="about-us__image"></div>
    </section>
  );
};

export default AboutUs;
