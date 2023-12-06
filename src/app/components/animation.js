import React, { useEffect, useRef } from "react";

const animation = (Component, animation, targetSelector) => {
  return (props) => {
    const componentRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const targetElement = componentRef.current.querySelector(
              targetSelector[index]
            );
            if (targetElement) {
              targetElement.classList.add("animate", animation[index]);
              observer.unobserve(componentRef.current);
            }
          }
        });
      });

      observer.observe(componentRef.current);

      return () => {
        observer.disconnect();
      };
    }, []);

    return (
      <div ref={componentRef}>
        <Component {...props} />
      </div>
    );
  };
};

export default animation;
