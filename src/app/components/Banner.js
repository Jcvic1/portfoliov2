import React from "react";
import { Link } from "react-scroll";
import me from "../assets/me.png";

const Banner = () => {
  return (
    <section id="home" className="container-xl">
      <div className="">
        <div className="container">
          <div className="row">
            <div
              className="col text-left d-flex align-items-center"
              style={{ minHeight: "80vh" }}
            >
              <div>
                <h1>HEY VICTOR HERE,</h1>
                <p>
                  I am a full stack developer with expertise in web development
                  and mobile development in using react native expo.
                </p>
                <p>
                  Started out with python based projects making use of
                  frameworks like django and flask to build full stack
                  applications then gradually added react to the mix.
                </p>
                <p>
                  Over the years I have built up projects for my portfolio
                  boosting my knowledge while stretching it futher by trying out
                  mobile projects in react native expo.{" "}
                </p>
                <Link to="contacts" className="btn btn-outline-secondary mt-2">
                  Get in touch
                </Link>
              </div>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <img
                className="img-fluid border border-secondary"
                src={me}
                style={{ maxHeight: "75vh", borderRadius: "50%" }}
                alt="victor"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
