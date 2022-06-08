import React from "react";
import { Outlet } from "react-router-dom";

const Event = () => {
  return (
    <>
      <h1>오늘의 이벤트</h1>
      <Outlet />
    </>
  );
};

export default Event;
