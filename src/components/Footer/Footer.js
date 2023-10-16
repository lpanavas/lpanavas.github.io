import React from "react";
import Media from "../Media";
const Footer = ({ user }) => {
  const basics = user.basics;
  return (
    <>
      <hr />
      <Media media={basics} />
      <div className="col-6 col-md"></div>
    </>
  );
};

export default Footer;
