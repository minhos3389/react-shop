import React, { useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Card from "../components/Card";
import backgroundImage from "../bg.png";
import axios from "axios";
import styled from "styled-components";

const Main = ({ shoes, setShoes }) => {
  const [btnCount, setBtnCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading && <Spinner animation="border" variant="primary" />}

      <div
        className="main-bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <Container>
        <Row>
          {shoes.map((shoesData, idx) => {
            return (
              <Card
                img={`https://codingapple1.github.io/shop/shoes${idx + 1}.jpg`}
                data={shoesData}
                key={idx}
              />
            );
          })}
        </Row>
        {btnCount === 2 ? (
          <Button
            onClick={() => {
              alert("상품 더 없어요~");
            }}
          >
            더보기 없음
          </Button>
        ) : (
          <Button
            onClick={() => {
              setIsLoading(true);
              setBtnCount(btnCount + 1);
              axios
                .get(
                  "https://codingapple1.github.io/shop/data" +
                    (btnCount + 2) +
                    ".json"
                )
                .then((result) => {
                  console.log(result.data);
                  // * [...shoes] -> shoes의 깊은 복사, 전개 연산자를 이용
                  let shoes_copy = [...shoes, ...result.data];
                  console.log(shoes_copy);
                  setShoes(shoes_copy);
                  setIsLoading(false);
                })
                .catch(() => {
                  console.log("실패");
                  setIsLoading(false);
                });
            }}
          >
            버튼
          </Button>
        )}
      </Container>
    </>
  );
};

export default Main;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 60px;
  border-radius: 5px;
  background-color: lightcoral;
  border: none;
  font-size: 20px;
  font-weight: bold;
  color: snow;
  margin: 0 auto 60px;
  cursor: pointer;
`;
