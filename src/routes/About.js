import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>회사 정보임</div>
      <Outlet />
    </>
  );
};

export default About;
