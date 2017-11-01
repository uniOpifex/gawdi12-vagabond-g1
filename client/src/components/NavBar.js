import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  align-items: flex-end;
  background-color: lightgreen;
  font-size: 1em;
  color: black;

  h1 {
    margin-bottom: 0px;
  }
  
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 10px;
  color: black;
  
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 2em;
  color: black;
  padding: 2px;
  a {
    text-decoration: none;
  }
`;

const NavBar = () => {
  return (
    <NavWrap>
      
        <h1>Project Vagabond</h1>
      

      <NavLinks>
        <Item>
          <Link to="/">Home</Link>
        </Item>
        <Item>
          <Link to="/user/profile">Profile</Link>
        </Item>
        <Item>
          <Link to="/cities/">Cities</Link>
        </Item>
      </NavLinks>
    </NavWrap>
  );
};

export default NavBar;
