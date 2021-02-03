import React from "react";
import "./Home.css";
import cssIcon from "../../images/css-icon.png";
import htmlIcon from "../../images/html-icon.png";
import jsIcon from "../../images/js-icon.png";
import headShot from "../../images/portfolio-headshot.png";
import curvedLine from "../../images/curved-line-icon.png";
import freeFromAll from "../../images/free-from-all.png";
import burgerApp from "../../images/burger-app.png";
import weatherDashboard from "../../images/weather-dashboard.png";
import workdayScheduler from "../../images/workday-scheduler-app.png";
import ghIcon from "../../images/GH-icon.png";
import liIcon from "../../images/LI-icon.png";
import resumeIcon from "../../images/resume-icon.png";
import chsBackground from "../../images/chs-background.png";
import emailIcon from "../../images/email-icon.png";


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
          <link rel="pdf" href="%PUBLIC_URL%/sa-resume.pdf" target="blank" />Resume
          </button>
        </div>
      </div>
    </div>


    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 coding-languages">
          <h2>html</h2>
          <img
            src={htmlIcon}
            class="coding-icons"
            alt="a html5 icon"
          />
        </div>
        <div class="col-md-4 coding-languages">
          <h2>css</h2>
          <img
            src={cssIcon}
            class="coding-icons"
            alt="a html5 icon"
          />
        </div>
        <div class="col-md-4 coding-languages">
          <h2>javascript</h2>
          <img
            src={jsIcon}
            class="coding-icons"
            alt="a html5 icon"
          />
        </div>
      </div>
    </div>

    <div class="container-fluid" id="about-me">
    <div class="row" id="about">
      <div class="col-sm-12"><h1>About Me</h1></div>
    </div>
    <div class="row" id="about-section-row">
      <div class="col-sm-4 align-middle portfolio-img-col">
        <img
          src={headShot}
          class="profile-picture"
          alt="a profile picture (headshot) of Shelby Andersen"
        />
      </div>
      <div class="col-sm-8">
        <p class="brand-text">
          I have a Bachelors Degree from the University of Georgia, which led
          me to my current role as an eCommerce Manager. My favorite part
          about my job is working with developers to improve the user
          experience. I realized through my current role that development is a
          career I wanted to pursue, and that led me to begin the Georgia Tech
          Coding Boot Camp Course.
        </p>

        <p>
          My dream role is to become a Web Developer for an athletic brand or
          sports company. I am married and have 2 Golden Retrievers that keep
          me busy! My husband and I live in Charleston, SC and love spending
          our free time at the beach or on our boat. When I am not coding I
          love running and being outside.
        </p>
      </div>
    </div>
    <div class="row curved-icon">
      <div class="col-sm-12">
        <img
          src={curvedLine}
          alt="a teal curved line, used to add design detail"
          class="curved-line-img"
        />
      </div>
    </div>
  </div>
 
  <div class="container-fluid portfolio-container">
      <div class="row" id="portfolio">
        <div class="col-sm-12 portfolio-col"><h1>Portfolio</h1></div>
      </div>

      <div class="row row-portfolio">
        <div class="col-sm-6 project-img">
          <h2>Free From All</h2>
          <img
            src={freeFromAll}
            alt="an image that shows the homepage of the Free From All App"
            class="portfolio-img"
          />

          <h3>
            <a href="https://github.com/shelbyandersen/free-from-all"
              >Website Link</a
            >
          </h3>
          <h3>
            <a href="https://github.com/shelbyandersen/free-from-all"
              >Git Hub Link</a
            >
          </h3>
          <p>
            Free From All is an application to source toxin-free makeup using
            CSS, jQuery, HTML, & APIs.
          </p>
        </div>
        <div class="col-sm-6 project-img">
          <h2>Weather Dashboard</h2>
          <img
            src={weatherDashboard}
            alt="an image that shows the homepage of a Weather App"
            class="portfolio-img"
          />
          <h3>
            <a href="https://shelbyandersen.github.io/weather-dashboard/"
              >Website Link</a
            >
          </h3>
          <h3>
            <a href="https://github.com/shelbyandersen/weather-dashboard"
              >Git Hub Link</a
            >
          </h3>
          <p>
            The Weather Dashboard utilizes the Open Weather API to display the
            weather for a city.
          </p>
        </div>
      </div>

      <div class="row row-2 row-portfolio">
        <div class="col-sm-6 project-img">
          <h2>Work Day Scheduler</h2>
          <img
            src={workdayScheduler}
            alt="an image that shows the homepage of a work day scheduler"
            class="portfolio-img"
          />

          <h3>
            <a href="https://shelbyandersen.github.io/work-day-scheduler/"
              >Website Link</a
            >
          </h3>
          <h3>
            <a href="https://github.com/shelbyandersen/work-day-scheduler"
              >Git Hub Link</a
            >
          </h3>
          <p>
            A simple application to schedule meetings between 9am and 5pm. This
            application uses moment.js to display the current hour.
          </p>
        </div>
        <div class="col-sm-6 project-img">
          <h2>Burger Application</h2>
          <img
            src={burgerApp}
            alt="an image that shows the homepage of a burger application"
            class="portfolio-img"
          />
          <h3>
            <a href="https://boiling-harbor-29648.herokuapp.com/"
              >Website Link</a
            >
          </h3>
          <h3>
            <a href="https://github.com/shelbyandersen/burger-app"
              >Git Hub Link</a
            >
          </h3>
          <p>
            The Secure Eat Da Burger App uses JavaScript to ask users to create
            and devour a burger.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <button type="button" class="btn btn-light">
            <a href="./assets/sa-resume.pdf" target="blank">Resume</a>
          </button>
        </div>
      </div>
    </div>

    <div class="container-fluid watercolor-background">
      <div class="row">
        <div class="col-sm-12" id="brand-statement">
          <h1 class="contact-me-heading" id="contact">Contact Me</h1>
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input type="text" class="form-control" placeholder="Name" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email</label>
              <input type="email" class="form-control" placeholder="Email" />
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button type="button" class="btn btn-light">Submit</button>
          </form>
        </div>
      </div>
      <div class="row social-row">
        <div class="col-sm-3">
          <a href="mailto:shelbyrobison14@gmail.com" target="blank">
            <img
              src={emailIcon}
              alt="placeholder image"
              class="portfolio-img"
          /></a>
        </div>
        <div class="col-sm-3">
          <a href="https://github.com/shelbyandersen" target="blank"
            ><img
              src={ghIcon}
              alt="Github icon"
              class="portfolio-img"
          /></a>
        </div>
        <div class="col-sm-3">
          <a
            href="https://www.linkedin.com/in/shelby-andersen-71b99784/"
            target="blank"
          >
            <img
              src={liIcon}
              alt="LinkedIn icon"
              class="portfolio-img"
          /></a>
        </div>
        <div class="col-sm-3">
          <a href="./assets/sa-resume.pdf" target="blank">
            <img
              src={resumeIcon}
              alt="resume icon"
              class="portfolio-img"
          /></a>
        </div>
      </div>
      <div class="container-fluid location-container">
      <div class="row">
        <div class="col-sm-12">
          <h1 class="location-header">Location</h1>
        </div>
        <div class="col-sm-6">
          <img
            src={chsBackground}
            alt="placeholder image"
            class="portfolio-img"
          />
        </div>
        <div class="col-sm-6 location-div">
          <h1>Charleston, SC</h1>
          <h4 class="location-section">
            I grew up on St. Simons Island, GA and currently reside in
            Charleston, SC. I guess you could say I am a beach girl at heart.
            For the right position, I am willing to relocate or work remote.
          </h4>
          <img
            src={curvedLine}
            alt="a teal curved line, used to add design detail"
            class="curved-line-img"
          />
        </div>
      </div>
    </div>


    </div>

    </div>
  );
};

export default Home;