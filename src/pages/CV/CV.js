import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";

// import { Document, Page } from "react-pdf";
// import pdfFile from "./LiudasPanavasResumeFall2024.pdf";

const CV = ({ user }) => {
  return (
    <Layout user={user}>
     <iframe src= './LiudasPanavasResumeFall2024.pdf' width="100%" height="600px" />

    </Layout>
  );
};

export default CV;
