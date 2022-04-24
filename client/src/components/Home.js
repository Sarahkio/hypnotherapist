import React from "react";
import styled from "styled-components";
import pic from "../images/photo-1575931953324-fcac7094999e.jpeg";
import pic2 from "../images/photo-1488426862026-3ee34a7d66df.avif";

import { GiWeightScale, GiBrokenHeart, GiDoubleFaceMask } from "react-icons/gi";

import { MdOutlineSmokingRooms } from "react-icons/md";

function Home() {
  return (
    <Wrapper>
      <Image src={pic}></Image>
      <InfoWrapper>
        <Title>Be a Better you, Get Betterr blah blah bllah</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sit
          amet nisl suscipit adipiscing bibendum est. Viverra orci sagittis eu
          volutpat odio facilisis mauris sit. Enim eu turpis egestas pretium
          aenean pharetra magna ac placerat. Varius sit amet mattis vulputate.
        </Paragraph>
        <ButtonWrapper>
          <ButtonService>Services</ButtonService>
          <ButtonContact>Contact Me</ButtonContact>
        </ButtonWrapper>
      </InfoWrapper>
      <ServicesWrapper>
        <Services>Services</Services>
        <ParagraphServices>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </ParagraphServices>
        <ServiceBase>
          <ServiceBox>
            <GiWeight />
            <WeightLoss>Weight Loss</WeightLoss>
            <ParagraphService>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt{" "}
            </ParagraphService>
          </ServiceBox>
          <ServiceBox>
            <MdOutlineSmoking />
            <WeightLoss>Smoking</WeightLoss>
            <ParagraphService>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt{" "}
            </ParagraphService>
          </ServiceBox>
          <ServiceBox>
            <GiBroken />
            <WeightLoss>Post-Traumatic</WeightLoss>
            <ParagraphService>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt{" "}
            </ParagraphService>
          </ServiceBox>
          <ServiceBox>
            <GiDoubleFace />
            <WeightLoss>Anxiety & Worry</WeightLoss>
            <ParagraphService>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt{" "}
            </ParagraphService>
          </ServiceBox>
        </ServiceBase>
      </ServicesWrapper>
      <ImageTextWrapper>
        <Image2 src={pic2}></Image2>
        <AboutMe>
          <About>About Me</About>
          <ParagraphAbout>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sit
            amet nisl suscipit adipiscing bibendum est. Viverra orci sagittis eu
            volutpat odio facilisis mauris sit.
          </ParagraphAbout>
          <ButtonLearn>Learn More</ButtonLearn>
        </AboutMe>
      </ImageTextWrapper>
      <ContactWrapper>
        <Label>Contact Me</Label>
        <Input type="text" placeholder="Your Email"></Input>
        <InputSubmit type="submit">Submit</InputSubmit>
      </ContactWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const ContactWrapper = styled.div`
  padding: 5vw 8vw 0 20vw;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Label = styled.label``;

const Input = styled.input`
  padding: 5px;
  border-radius: 4px;
  width: 400px;
`;

const Image = styled.img`
  width: 100%;
  max-height: 50%;
  position: relative;
`;

const Image2 = styled.img`
  width: 300px;
  height: 400px;
`;

const Title = styled.h2`
  color: black;
  font-size: 25px;
  letter-spacing: 1px;
  /* display: flex; */
  /* z-index: 2; */
`;

const Paragraph = styled.p`
  width: 50%;
  color: black;
  font-size: 15px;
  line-height: 25px;
`;

const ParagraphService = styled.p`
  width: 500px;
`;

const ParagraphAbout = styled.p`
  width: 650px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const InfoWrapper = styled.div`
  position: absolute;
  top: 50%;
  /* left: 30%; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* width: 800px; */
`;

const ImageTextWrapper = styled.div`
  padding: 8vw 8vw 0 20vw;
  text-align: center;
  display: flex;
`;

const AboutMe = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

const About = styled.h3`
  font-size: 20px;
`;

const ServicesWrapper = styled.div`
  padding: 5vw 8vw 0 8vw;
  text-align: center;
`;

const Services = styled.h1`
  font-size: 30px;
  margin-bottom: 10px;
`;

const ParagraphServices = styled.p`
  margin-bottom: 10px;
`;

const WeightLoss = styled.h3`
  font-size: 15px;
  font-weight: bold;
  padding: 13px 0 7px 0;
`;

const ServiceBox = styled.div`
  /* text-align: start; */
  background-color: #f9f9ff;
  padding: 13px 0 7px 0;
`;

const ServiceBase = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const GiWeight = styled(GiWeightScale)`
  font-size: 25px;
`;
const MdOutlineSmoking = styled(MdOutlineSmokingRooms)`
  font-size: 25px;
`;

const GiBroken = styled(GiBrokenHeart)`
  font-size: 25px;
`;

const GiDoubleFace = styled(GiDoubleFaceMask)`
  font-size: 25px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
`;

const InputSubmit = styled.button`
  border: none;
  color: black;
  background-color: orange;
  padding: 8px 13px;
  border-radius: 5px;
  cursor: pointer;
  width: fit-content;
`;

const ButtonService = styled.button`
  border: none;
  color: black;
  background-color: orange;
  padding: 13px 35px;
  border-radius: 5px;
  cursor: pointer;
  width: fit-content;
  &:hover {
    color: orange;
    background-color: white;
  }
`;

const ButtonLearn = styled.button`
  border: none;
  color: black;
  background-color: orange;
  padding: 13px 35px;
  border-radius: 5px;
  cursor: pointer;
  width: fit-content;
`;

const ButtonContact = styled.button`
  border: none;
  color: black;
  background-color: orange;
  padding: 13px 35px;
  border-radius: 5px;
  cursor: pointer;
  width: fit-content;
  &:hover {
    color: orange;
    background-color: white;
  }
`;

export default Home;
