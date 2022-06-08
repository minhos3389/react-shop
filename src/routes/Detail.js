import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = (props) => {
  const { id } = useParams();
  // 현재 url에 입력한 번호와 같은 번호를 가진 상품을 찾아서 데이터바인딩 해달라고 코드짜면 끝
  let findProduct = props.shoes.find((x) => x.id === Number(id));
  const [isShowAd, setIsShowAd] = useState(true);
  const [value, setValue] = useState("");
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowAd(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isNaN(value) === true) {
      setAlert(true);
    } else {
      setAlert(false);
    }
  }, [value]);

  const handleImgError = (e) => {
    e.target.src =
      "https://mblogthumb-phinf.pstatic.net/20160817_259/retspe_14714118890125sC2j_PNG/%C7%C7%C4%AB%C3%F2_%281%29.png?type=w800";
  };

  return (
    <div className="container">
      {isShowAd && (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      )}
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              findProduct.id + 1
            }.jpg`}
            width="100%"
            alt="상세 페이지 이미지"
            onError={handleImgError}
          />
        </div>
        <div className="col-md-6">
          {alert && <AlertWrapper>경고 : 숫자만 입력하세요</AlertWrapper>}
          <NumInput
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
            alert={alert}
            maxLength={5}
          />
          <h4 className="pt-2">{findProduct.title}</h4>
          <p>{findProduct.content}</p>
          <p>{findProduct.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;

const NumInput = styled.input`
  width: 220px;
  margin-top: 10px;
  height: 45px;
  font-size: 20px;
  font-weight: 500;
  padding-left: 10px;
  &:focus {
    outline: none;
    border: ${(props) => props.alert && `4px solid #dc3545`};
  }
`;

const AlertWrapper = styled.div`
  background-color: #dc3545;
  margin: 5px auto 0px;
  width: 300px;
  height: 50px;
  color: white;
  font-size: 30px;
`;
