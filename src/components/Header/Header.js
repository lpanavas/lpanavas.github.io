import React from "react";

import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { StyledNavMain, StyledNavSub, StyledLink } from "./styles";
// let's see

const items = [
  {
    name: "Home",
    path: "/",
    subpath: [
      {
        name: "Bio",
        path: "/",
      },

      {
        name: "C.V.",
        path: "/LiudasPanavasCV.pdf",
      },
    ],
  },
  {
    name: "Publications",
    path: "/publications",
    subpath: [
      {
        name: "Conference",
        path: "/publications#conference",
      },
    ],
  },
  {
    name: "Projects",
    path: "/projects",
    subpath: [
      {
        name: "Research",
        path: "/projects#research",
      },
    ],
  },
];

const Header = () => {
  const location = useLocation();

  return (
    // <Navbar expand = "lg" bg="light" variant="light" fixed= "top">

    <Navbar fluid="true" expand="lg">
      <Navbar.Brand style={{ fontSize: "2rem" }} href="/">
        Liudas Panavas
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {items.map((i, idx) => (
            <Nav.Item key={idx} className="flex-column">
              {/* <StyledNavMain style={{ color: "#000000" }} key={i.name}> */}
              <StyledLink to={i.path}> {i.name}</StyledLink>
              {/* </StyledNavMain> */}
              {i.subpath &&
                i.subpath.map((j) => (
                  <StyledNavSub element={Link} href={"#" + j.path} key={j.name}>
                    {j.name}
                  </StyledNavSub>
                ))}
            </Nav.Item>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
