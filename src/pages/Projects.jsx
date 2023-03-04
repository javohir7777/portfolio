import React from "react";
import Navbar from "../components/Navbar";
import "../components/Navbar.css";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <section className="my-5">
        <div className="card my-5" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#top" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
