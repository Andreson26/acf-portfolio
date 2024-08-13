'use client'
import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7; 
  z-index: 50;
`;

const LoaderCircle = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db; 
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1.5s linear infinite;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderCircle />
    </LoaderContainer>
  );
};

export default Loader;