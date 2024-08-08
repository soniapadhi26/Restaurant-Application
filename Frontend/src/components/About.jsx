/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            At our restaurant, we are passionate about crafting delicious, mouth-watering meals that are prepared with the utmost attention to hygiene and quality.  When you reserve a table with us, whether for a family gathering or a special occasion, we ensure that every detail is taken care of, from the ambiance to the service.<br/>
            Our team is dedicated to maintaining a welcoming atmosphere where you can relax, enjoy, and savor every bite. Book your dining experience with us today and indulge in flavors that will delight your taste buds.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;