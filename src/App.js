import { useState } from "react";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import "./App.css";

import Card from "./components/Card";
import data from "./utils/data";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Main from "./routes/Main";
import DetailPage from "./routes/Detail";
import AboutPage from "./routes/About";
import styled from "styled-components";
import EventPage from "./routes/Event";

function App() {
  // 중요한 데이터니 state로 관리.
  let [shoes, setShoes] = useState(data);
  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/detail")}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main shoes={shoes} setShoes={setShoes} />} />
        <Route path="/detail/:id" element={<DetailPage shoes={shoes} />} />
        <Route path="/about" element={<AboutPage />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치 정보임</div>} />
        </Route>
        <Route path="/event" element={<EventPage />}>
          <Route path="one" element={<h3>첫 주문시 양배추즙 서비스</h3>} />
          <Route path="two" element={<h3>생일기념 쿠폰받기</h3>} />
        </Route>
        <Route path="*" element={<div>404페이지</div>} />
      </Routes>
    </div>
  );
}

export default App;

// const NavLink = styled(Link)`
//   text-decoration: none;
//   padding: 0px 10px;
// `;
