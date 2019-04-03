import React from "react";
import "./style.sass";

const SectionPresentational = ({ children, textSection }) => {
  return (
    <section className={textSection ? "section text-section" : "section"}>
      <div className="section__inner">{children}</div>
    </section>
  );
};

export default SectionPresentational;
