import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import $ from 'jquery';
import { MdClose } from 'react-icons/md';
import Typography from '@mui/material/Typography';

const Background = styled.div`
  width: 1000px;
  height: 80%;
  padding-top:1%;
  margin-left:10%;
  position: fixed;
 
  background: rgba(0.0, 0.0, 0.0, 0.3);
  overflow-x: hidden;
  overflow-y: scroll;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
width: 800px;
  height: 80%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
  color: #000;
  display: grid;
  margin-left: 8%;
  padding-left: 1%;
  padding-top: 1%;
  grid-template-columns: 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
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

export const Modal = ({ showModal, setShowModal, CardClick }) => {
  let list = CardClick.citations
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

              <Typography sx={{ paddingLeft: '40%' }}>
                <h1>{CardClick.areaName}</h1></Typography>

              <ModalContent>

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