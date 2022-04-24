import React from "react";

import { BiPhoneCall } from "react-icons/bi";
import styled from "styled-components";
import { HiOutlineMail } from "react-icons/hi";

function TopHeader() {
  return (
    <Wrapper>
      <PhoneWrapper>
        <Phone href={"tel:514-909-1313"}>
          <BiPhone /> (514) 909-1313
        </Phone>
      </PhoneWrapper>
      <EmailWrapper>
        <Email href={"mailto:lisaf@post.com"}>
          <HiOutline /> lisaf@post.com
        </Email>
      </EmailWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f6f6f6;
  padding: 10px;
  display: flex;
  align-items: center;
  /* gap: 20px; */
  justify-content: space-evenly;
  /* border: 2px solid green; */
`;

const BiPhone = styled(BiPhoneCall)`
  color: orange;
`;

const HiOutline = styled(HiOutlineMail)`
  color: orange;
`;

const PhoneWrapper = styled.div`
  display: flex;
  gap: 10px;
  color: green;
  /* border: 2px solid blue; */
`;

const EmailWrapper = styled.div`
  display: flex;
`;

const Email = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: green;
`;

const Phone = styled.a`
  text-decoration: none;
  color: black;
`;
export default TopHeader;
