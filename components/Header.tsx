import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  height: 5rem;
  width: 100vw;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transition: all 0.15s ease;
  & h1 {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.05rem;
    color: rgba(var(--light-color), 0.75);
    cursor: pointer;
    transition: all 0.15s ease;
    &:hover {
      color: rgba(var(--light-color), 1);
    }
  }
  & ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    & li {
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: 0.05rem;
      cursor: pointer;
      color: rgba(var(--primary-color), 0.835);
      transition: all 0.15s ease;
      font-weight: 600;
      &:hover {
        color: rgba(var(--primary-color), 1);
      }
    }
  }
`;

const PseudoElement = styled.div`
  height: 5rem;
`;

const Header = () => {
  return (
    <>
      <Nav>
        <h1>Infotech Success Point</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </Nav>
      <PseudoElement />
    </>
  );
};

export default Header;
