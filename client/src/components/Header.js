import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import { useHistory } from "react-router";

const Header = () => {
  //   let history = useHistory();
  return (
    <Wrapper>
      <HypnoName>
        <Hypno>Hypnotherapist</Hypno>
        <Name>Lisa Freedman Besner</Name>
      </HypnoName>
      <LinkWrapper>
        <NavigationLink to="/">
          <Home>Home</Home>
        </NavigationLink>
        <NavigationLink to="/about">
          <About>About</About>
        </NavigationLink>
        <NavigationLink to="/services">
          <Services>Services</Services>
        </NavigationLink>
      </LinkWrapper>
      <Button>Book Appointment</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 40px;
  gap: 50px;
  justify-content: space-evenly;
  align-items: center;

  /* border: 2px solid blue; */
`;

const HypnoName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  /* border: 2px solid green; */
`;

const NavigationLink = styled(NavLink)`
  display: flex;

  &:hover {
    /* background-color: lightgreen; */
  }

  &.active {
    /* background-color: orange; */
  }
`;

const Home = styled.div`
  text-decoration: none;
  color: black;
  cursor: pointer;
`;
const About = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
`;
const Services = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
`;
const Hypno = styled.a`
  color: orange;
  font-weight: bold;
  font-size: 25px;
`;

const Name = styled.div`
  font-size: 15px;
  color: green;
`;

const Button = styled.button`
  border: none;
  color: black;
  background-color: orange;
  padding: 13px 35px;
  border-radius: 5px;
  cursor: pointer;
  width: fit-content;
`;

const LinkWrapper = styled.div`
  /* position: fixed; */
  /* width: 100%; */
  display: flex;
  gap: 70px;
`;

export default Header;
