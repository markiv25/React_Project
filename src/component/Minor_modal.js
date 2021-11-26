import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import $ from 'jquery';
import { MdClose } from 'react-icons/md';
import Typography from '@mui/material/Typography';

const Background = styled.div`
  width: 50%;
  height:80%;
  background: rgba(0.0, 0.0, 0.0, 0.3);
  position: fixed;
  margin-left: 10%;
  display: relative;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 80%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
  color: #000;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  margin-top:10px;
  margin-left:7%;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  margin-left:10px;
  margin-right:10px ;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Minor_Modal = ({ showModal, setShowModal, CardClick }) => {
  let list = CardClick.courses
  const [Research, setValue] = React.useState([]);

  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <Typography>
                  <h3>Course Name : </h3>
                  <h1>{CardClick.name}</h1></Typography>
              </ModalContent>

              <ModalContent>
                <p>{CardClick.description}</p>
              </ModalContent>
              <ModalContent>
                <Typography>
                  <h3>Courses : </h3></Typography>
                {list.map(i => (
                  <Typography variant="overline" gutterBottom>
                    <li>{i}</li>
                  </Typography>

                ))
                }

              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />

            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};