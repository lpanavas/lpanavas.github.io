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
