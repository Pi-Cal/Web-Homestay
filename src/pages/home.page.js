import React, { useContext, useEffect, useState } from "react";
import { Container, Image, Col, ButtonGroup, Button } from "react-bootstrap";
import {
  useNavigate,
  createSearchParams,
  generatePath,
} from "react-router-dom";
import Layout from "../components/layout.component";
import { SearchContext } from "../context/searchContext";
import "./home.css";
import { animated, useSpring } from "react-spring";
import { Signup } from "./signUp.page";
import LoginModal from "../components/header/login.component";
import { NotificationContext } from "../context/notificationContext";

const HomePage = () => {
  const { setOnViewport } = useContext(SearchContext);

  useEffect(() => {
    setOnViewport(true);
    return () => {
      setOnViewport(false);
    };
  }, []);

  const [isLoginModal, setLoginModal] = useState(false);
  const [isSignupModal, setSignupModal] = useState(false);
  const [isForgot, setForgot] = useState(false);

  const [isToast, setToast] = useState(false);
  const [toastNoti, setToastNoti] = useState(null);
  const [newNotiCount, setNewNotiCount] = useState(0);

  const navigate = useNavigate();

  const { socket } = useContext(NotificationContext);
  const userState = JSON.parse(localStorage.getItem("user-state"));

  const handleLoginToast = () => {
    setToastNoti("Đăng nhập thành công");
    setToast(true);
  };

  const handleSignupToast = () => {
    setToastNoti("Đăng ký thành công");
    setToast(true);
  };

  useEffect(() => {
    if (!userState) return;
    let isActive = true;
    console.log(socket);
    socket.on("receive_rental", (content, sendDate) => {
      if (isActive) {
        const exposedContent = content.split("|")[0];
        setToastNoti(exposedContent);
        setToast(true);
        setNewNotiCount((prevCount) => prevCount + 1);
      }
    });
    socket.on("receive_feedback", (content, sendDate) => {
      if (isActive) {
        const exposedContent = content.split("|")[0];
        setToastNoti(exposedContent);
        setToast(true);
        setNewNotiCount((prevCount) => prevCount + 1);
      }
    });
    socket.on("receive_room", (content, sendDate) => {
      if (isActive) {
        const exposedContent = content.split("|")[0];
        setToastNoti(exposedContent);
        setToast(true);
        setNewNotiCount((prevCount) => prevCount + 1);
      }
    });
    return () => {
      isActive = false;
      socket.off("receive_rental");
      socket.off("receive_feedback");
    };
  }, []);

  return (
    <Layout containerStyleName="">
      <Container className="mt-5 vh-100 d-flex justify-content-center align-items-center bg-success">
        {!userState ? (
          <ButtonGroup>
            <Button onClick={() => setLoginModal(true)} className="me-5">
              Đăng nhập
            </Button>
            <Button onClick={() => setSignupModal(true)}>Đăng ký</Button>
          </ButtonGroup>
        ) : (
          <Button onClick={() => navigate(`/roommanager`)}>
            Quản lý phòng
          </Button>
        )}

        <Signup
          show={isSignupModal}
          onHide={() => setSignupModal(false)}
          displaySuccessToast={handleSignupToast}
        />
        <LoginModal
          show={isLoginModal}
          onHide={() => setLoginModal(false)}
          displaySuccessToast={handleLoginToast}
        />
      </Container>
    </Layout>
  );
};

export default HomePage;
