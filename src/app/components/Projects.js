import React from "react";
import siteProjectsData from "../utility/siteProjectsData";
import appProjectsData from "../utility/appProjectsData";
import mobileProjectsData from "../utility/mobileProjects";
import pythonProjects from "../utility/pythonProjects";
import newProjects from "../utility/newProjects";
import animation from "./animation";

const Projects = () => {
  return (
    <section id="projects" className="my-5 container-xl">
      <h2 className="animated text-center my-5">PROJECTS</h2>

      <div className="animated my-1 d-flex justify-content-center">
        <ul
          className="nav nav-pills mb-3 flex-nowrap overflow-x-auto"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link rounded-pill active grey text-nowrap"
              id="pills-webapp-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-webapp"
              type="button"
              role="tab"
              aria-controls="pills-webapp"
              aria-selected="false"
            >
              Web Apps
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link rounded-pill grey text-nowrap"
              id="pills-mobileapp-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-mobileapp"
              type="button"
              role="tab"
              aria-controls="pills-mobileapp"
              aria-selected="false"
            >
              Mobile Apps
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link rounded-pill grey text-nowrap"
              id="pills-website-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-website"
              type="button"
              role="tab"
              aria-controls="pills-website"
              aria-selected="true"
            >
              Websites
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link rounded-pill grey text-nowrap"
              id="pills-python-projects-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-python-projects"
              type="button"
              role="tab"
              aria-controls="pills-python-projects"
              aria-selected="false"
            >
              Python Projects
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link rounded-pill grey text-nowrap"
              id="pills-new-projects-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-new-projects"
              type="button"
              role="tab"
              aria-controls="pills-new-projects"
              aria-selected="false"
            >
              In Progress
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-content" id="pills-tabContent">
        {/* Web App */}

        <div
          className="tab-pane fade show active"
          id="pills-webapp"
          role="tabpanel"
          aria-labelledby="pills-webapp-tab"
          tabIndex="0"
        >
          <div className="container">
            <div className="row">
              {appProjectsData.map((project) => (
                <div key={project.id} className="col-sm-12 col-lg-6 my-3">
                  <div className="card border-0">
                    <div
                      id={project.id}
                      className="carousel slide m-2"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {project.images.map((image, index) => (
                          <div
                            key={index}
                            className={`carousel-item ${
                              index === 0 ? "active" : ""
                            }`}
                          >
                            <img
                              src={image}
                              style={{ maxHeight: "40vh", objectFit: "cover" }}
                              className="d-block m-auto border rounded"
                              alt={`app-${index + 1}.png`}
                            />
                          </div>
                        ))}
                      </div>
                      {/* Carousel Controls */}
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target={`#${project.id}`}
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target={`#${project.id}`}
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>

                    {/* Card Body */}
                    <div className="card-body">
                      <h5 className="card-title my-2">{project.title}</h5>
                      <h6 className="card-title my-3">Skills Used</h6>
                      <div className="card-text">
                        {project.skills.map((skill, index) => (
                          <p
                            key={index}
                            className="my-1 text-center p-2 bg-secondary rounded-pill"
                          >
                            {skill}
                          </p>
                        ))}
                      </div>
                      <h6 className="card-title my-2">Description</h6>
                      <p className="card-text">{project.description}</p>
                      <a href={project.link} className="btn btn-success">
                        Go to Site
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile App */}

        <div
          className="tab-pane fade"
          id="pills-mobileapp"
          role="tabpanel"
          aria-labelledby="pills-mobileapp-tab"
          tabIndex="0"
        >
          <div className="container">
            <div className="row">
              {mobileProjectsData.map((project) => (
                <div key={project.id} className="col-sm-12 col-lg-6 my-3">
                  <div className="card border-0">
                    <div
                      id={project.id}
                      className="carousel slide m-2"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {project.images.map((image, index) => (
                          <div
                            key={index}
                            className={`carousel-item ${
                              index === 0 ? "active" : ""
                            }`}
                          >
                            <img
                              src={image}
                              style={{ maxHeight: "40vh", objectFit: "cover" }}
                              className="d-block m-auto border rounded"
                              alt={`app-${index + 1}.png`}
                            />
                          </div>
                        ))}
                      </div>
                      {/* Carousel Controls */}
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target={`#${project.id}`}
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target={`#${project.id}`}
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>

                    {/* Card Body */}
                    <div className="card-body">
                      <h5 className="card-title my-2">{project.title}</h5>
                      <h6 className="card-title my-3">Skills Used</h6>
                      <div className="card-text">
                        {project.skills.map((skill, index) => (
                          <p
                            key={index}
                            className="my-1 text-center p-2 bg-secondary rounded-pill"
                          >
                            {skill}
                          </p>
                        ))}
                      </div>
                      <h6 className="card-title my-2">Description</h6>
                      <p className="card-text">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Websites */}

        <div
          className="tab-pane fade"
          id="pills-website"
          role="tabpanel"
          aria-labelledby="pills-website-tab"
          tabIndex="0"
        >
          <div className="container">
            <div className="row">
              {siteProjectsData.map((project) => (
                <div key={project.id} className="col-sm-12 col-lg-6 my-3">
                  <div className="card border-0">
                    <div
                      id={project.id}
                      className="carousel slide m-2"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {project.images.map((image, index) => (
                          <div
                            key={index}
                            className={`carousel-item ${
                              index === 0 ? "active" : ""
                            }`}
                          >
                            <img
                              src={image}
                              style={{ maxHeight: "40vh" }}
                              className="d-block m-auto border rounded"
                              alt={`site-${index + 1}.png`}
                            />
                          </div>
                        ))}
                      </div>
                      {/* Carousel Controls */}
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target={`#${project.id}`}
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target={`#${project.id}`}
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>

                    {/* Card Body */}
                    <div className="card-body">
                      <h5 className="card-title my-2">{project.title}</h5>
                      <h6 className="card-title my-3">Skills Used</h6>
                      <div className="card-text">
                        {project.skills.map((skill, index) => (
                          <p
                            key={index}
                            className="my-1 text-center p-2 bg-secondary rounded-pill"
                          >
                            {skill}
                          </p>
                        ))}
                      </div>
                      <h6 className="card-title my-2">Description</h6>
                      <p className="card-text">{project.description}</p>
                      <a href={project.link} className="btn btn-success">
                        Go to Site
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Python Projects */}

        <div
          className="tab-pane fade"
          id="pills-python-projects"
          role="tabpanel"
          aria-labelledby="pills-python-projects-tab"
          tabIndex="0"
        >
          <div className="container">
            <div className="row">
              {pythonProjects.map((project, index) => (
                <div key={index} className="col-sm-12 col-lg-6 my-3">
                  <div className="card-body">
                    <h5 className="card-title my-2">{project.title}</h5>
                    <h6 className="card-title my-3">Skills Used</h6>
                    <div className="card-text">
                      {project.skills.map((skill, skillIndex) => (
                        <p
                          key={skillIndex}
                          className="my-1 text-center p-2 bg-secondary rounded-pill"
                        >
                          {skill}
                        </p>
                      ))}
                    </div>
                    <h6 className="card-title my-2">Description</h6>
                    <p className="card-text">{project.description}</p>
                    {project.link && (
                      <a href={project.link} className="btn btn-success">
                        Go to Site
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* New Projects */}

        <div
          className="tab-pane fade"
          id="pills-new-projects"
          role="tabpanel"
          aria-labelledby="pills-new-projects-tab"
          tabIndex="0"
        >
          <div className="text-center">
            {newProjects.map((project, index) => (
              <div key={index} className="my-3">
                <div className="my-1 text-center">{project.name}</div>
                <div>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Animated striped example"
                    aria-valuenow={project.progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default animation(Projects, ["tracking-in-contract-bck"], [".animated"]);
