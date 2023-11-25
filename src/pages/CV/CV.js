import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";

// import { Document, Page } from "react-pdf";
import pdfFile from "./LiudasPanavasResume.pdf";

const CV = ({ user }) => {
  console.log(pdfFile);
  return (
    <Layout user={user}>
      <object
        data="./LiudasPanavasResume.pdf"
        type="application/pdf"
        width="100%"
        height="800rem"
      >
        <p>
          Alternative text - include a link{" "}
          <a href="./LiudasPanavasResume.pdf">to the PDF!</a>
        </p>
      </object>
    </Layout>
  );
};

export default CV;
