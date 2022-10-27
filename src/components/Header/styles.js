import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const StyledNavMain = styled(Nav.Link)`
  padding-bottom: 0px;
  font-weight: bold;
`;

export const StyledNavSub = styled(Nav.Link)`
  color: rgba(0, 0, 0, 1);
  padding-top: 0px;
  padding-bottom: 0px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000 !important;
  font-weight: bold;
  padding: 0.5rem 0.5rem 0rem 0.5rem;
`;

export const HeaderSpan = styled.span`
  @media (max-width: 425px) {
    display: none;
  }
`;
