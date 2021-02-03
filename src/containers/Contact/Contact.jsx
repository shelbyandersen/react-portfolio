import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
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
              src="./assets/images/email-icon.png"
              alt="placeholder image"
              class="portfolio-img"
          /></a>
        </div>
        <div class="col-sm-3">
          <a href="https://github.com/shelbyandersen" target="blank"
            ><img
              src="./assets/images/GH-icon.png"
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
              src="./assets/images/LI-icon.png"
              alt="LinkedIn icon"
              class="portfolio-img"
          /></a>
        </div>
        <div class="col-sm-3">
          <a href="./assets/sa-resume.pdf" target="blank">
            <img
              src="./assets/images/resume-icon.png"
              alt="resume icon"
              class="portfolio-img"
          /></a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;