import React from "react";

const PrimaryButton = (props) => {
  const { link, title, type } = props;
  return (
    <a
      href={link}
      className={`block ${
        type === "fill"
          ? "bg-primary hover:bg-primary-400 border-2 border-primary hover:border-primary-400 duration-300 text-white px-6 py-2 rounded"
          : "border-2 border-secondary-200 text-secondary-800 px-6 py-2 rounded flex items-center"
      }`}
    >
      {title}
    </a>
  );
};

export default PrimaryButton;
