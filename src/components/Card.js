import React from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = ({ img, data }) => {
  const navigte = useNavigate();
  const handleImgError = (e) => {
    e.target.src =
      "https://mblogthumb-phinf.pstatic.net/20160817_259/retspe_14714118890125sC2j_PNG/%C7%C7%C4%AB%C3%F2_%281%29.png?type=w800";
  };

  return (
    <Col
      sm={4}
      onClick={() => {
        navigte(`/detail/${data.id}`);
      }}
    >
      <img
        src={img}
        alt=""
        style={{ width: "80%", maxHeight: "186px" }}
        onError={handleImgError}
      />
      <div>{data.title}</div>
      <p>{data.price}</p>
      <EmptyBox />
    </Col>
  );
};

export default Card;

const EmptyBox = styled.div`
  width: 100%;
  height: 50px;
`;
