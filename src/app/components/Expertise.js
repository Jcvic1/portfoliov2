import React from "react";
import expertiseData from "../utility/expertiseData";
import animation from "./animation";

const Expertise = () => {
  return (
    <section id="expertise" className="my-5">
      <div className=" bg-secondary">
        <h2 className="animated text-center py-5">EXPERTISE</h2>

        <div className="container-xl pb-5">
          {expertiseData.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <ul>
                {item.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default animation(
  Expertise,
  ["tracking-in-contract-bck"],
  [".animated"]
);
