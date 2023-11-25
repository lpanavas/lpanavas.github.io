import React, { useState, useEffect } from "react";
import "./Work.css";
import Layout from "../../components/Layout";

const randomColor = () => {
  const letters = "BCDEF".split("");
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};

const Work = ({ user }) => {
  const [colorGradients, setColorGradients] = useState([]);

  useEffect(() => {
    const gradients = user.work.map(() => {
      const color1 = randomColor();
      const color2 = randomColor();
      return `linear-gradient(to bottom right, ${color1}, ${color2})`;
    });
    setColorGradients(gradients);
  }, [user]);

  return (
    <Layout user={user}>
      This is a collection of my work. While working on academic papers there is
      often many iterations of notebooks, websites, or writing that is lost in
      the process. All that comes out is one final paper from 8 months of work.
      Here I want to highlight some of the those steps or random side projects
      that I've done. They may not all be well documented or curated but they
      were all interesting and fun to make.
      <div className="card-container">
        {user.work.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.title} className="card-image" />
            <div
              className="hover-content"
              style={{ background: colorGradients[index] }}
            >
              <div className="card-title">{item.title}</div>
              <div className="card-summary">{item.summary}</div>
              <a href={item.url} className="card-link">
                Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Work;
