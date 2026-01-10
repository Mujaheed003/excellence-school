import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ children, to, type, aos }) => {
  const base =
    "flex items-center justify-center px-8 py-3 rounded-full transition duration-300 font-semibold hover:scale-105 ";
  const base2 =
    "inline-flex items-center space-x-2 px-8 py-4 rounded-full transition duration-300 hover:scale-105 ";

  const styles = {
    homeBtnBg: base + "bg-teal-500 hover:bg-teal-600 shadow-lg",
    homeBtnTransparent:
      base +
      "bg-transparent hover:bg-white border-2 border-white hover:text-teal-800 ",
    primary:
      base2 +
      "bg-teal-500 text-white font-bold text-lg  shadow-lg hover:bg-teal-600 transform hover:scale-[1.05]",
    secondary:
      base2 +
      "border-2 border-teal-500 text-teal-500 font-semibold  hover:bg-teal-600 hover:text-white ",
  };

  return (
    <div data-aos={aos}>
      <NavLink to={to} className={styles[type]}>
        {children}
      </NavLink>
    </div>
  );
};

export default Button;
