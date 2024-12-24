import React from "react";

const SectionTitle = (props) => {
  return (
    <h2 className="pb-8 sm:pb-10 md:pb-12 lg:pb-16 text-3xl md:text-4xl lg:text-5xl text-primary opacity-50 font-bold uppercase text-start md:text-center">
      {props.title}
    </h2>
  );
};

export default SectionTitle;
