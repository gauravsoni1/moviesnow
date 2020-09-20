import { render } from "@testing-library/react";
import React from "react";
import "./inputbox.scss";

const Inputbox = (props) => {
  return <input {...props} type="text"></input>;
};

export default Inputbox;
