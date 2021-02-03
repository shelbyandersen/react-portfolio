import React from "react";
import "./Home.css";


const Home = () => {
  return (
    <div>
    <div class="container-fluid watercolor-background">
      <div class="row">
        <div class="col-sm-12" id="brand-statement">
          <h1>Brand Statement</h1>
          <p class="brand-text">
            eCommerce Manager specializing in analyzing and implementing
            strategies that improve overall organization goals. Passionate about
            efficiency and high-quality work. Strong work ethic, ambition, and
            desire to learn. Currently attending Georgia Tech's Full-Stack Web
            Development Program.
          </p>
          <button type="button" class="btn btn-light">
            <a href="./assets/sa-resume.pdf" target="blank">Resume</a>
          </button>
        </div>
      </div>
    </div>
 
    </div>
  );
};

export default Home;