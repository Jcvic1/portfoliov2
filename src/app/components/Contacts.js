import React from "react";
import animation from "./animation";

const Contacts = () => {
  const contactLinks = [
    {
      icon: "bi-whatsapp",
      color: "text-primary",
      href: "https://wa.me/+79038030953",
    },
    {
      icon: "bi-envelope-at-fill",
      color: "text-secondary",
      href: "mailto:victorjcdon@gmail.com@gmail.com",
    },
    { icon: "bi-telephone", color: "text-success", href: "tel:+79038030953" },
    {
      icon: "bi-telegram",
      color: "text-primary",
      href: "tg://resolve?domain=Jcvic",
    },
  ];

  return (
    <section id="contacts" className="my-5 pt-5 container-xl ">
      <h2 className="animated text-center my-5">CONTACTS</h2>
      <p className="my-5">
        Most Projects with backends are hosted on servers which idles out if
        requests aren't made regularly, please be patient while it reboots or
        contact me below for discussions.
      </p>
      <div className="container">
        <div className="row">
          {contactLinks.map((link, index) => (
            <div key={index} className="col-sm-12 col-lg-3 my-1 text-center">
              <a
                className={`px-5 border rounded-pill ${link.color}`}
                href={link.href}
              >
                <i className={`bi ${link.icon}`}></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default animation(Contacts, ["tracking-in-contract-bck"], [".animated"]);