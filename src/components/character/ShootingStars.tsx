import React from 'react';

import styled, { keyframes } from 'styled-components';

const ShootingStars = () => {
  return (
    <ShootingStarsLayout>
      <span />
      <span className="shooting-star-2" />
      <span className="shooting-star-3" />
      <span className="shooting-star-4" />
      <span className="shooting-star-5" />
      <span className="shooting-star-6" />
    </ShootingStarsLayout>
  );
};

const ShootingStarFrames = keyframes`
  0% {
    transform: rotate(315deg) translateX(0);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: rotate(315deg) translateX(-1500px);
    opacity: 0;
  }`;

const ShootingStarsLayout = styled.div`
  & > span {
    position: absolute;
    top: 0%;
    left: 50%;
    width: 1.5px;
    height: 1.5px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1), 0 0 0 4px rgba(255, 255, 255, 0.1), 0 0 4px rgba(255, 255, 255, 1);
    animation: ${ShootingStarFrames} 6s linear infinite;
  }
  & > span::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateX(-35%) translateY(-50%) scale(0.3);
    width: 700px;
    height: 1px;
    background: linear-gradient(90deg, #fff, transparent);
  }
  .shooting-star-2 {
    position: absolute;
    top: 400px;
    left: 110%;
    animation-delay: 5s;
    animation-duration: 10s;
  }
  .shooting-star-3 {
    position: absolute;
    top: 180px;
    left: 120%;
    animation-delay: -10s;
    animation-duration: 12s;
  }
  .shooting-star-4 {
    position: absolute;
    box-shadow: none;
    top: 140px;
    left: 110%;
    animation-delay: -13s;
    animation-duration: 16s;
  }
  .shooting-star-5 {
    position: absolute;
    box-shadow: none;
    top: 0;
    left: 110%;
    animation-delay: 1.5s;
    animation-duration: 26s;
  }
  .shooting-star-6 {
    position: absolute;
    box-shadow: none;
    top: 0;
    left: 30%;
    animation-delay: -1s;
    animation-duration: 44s;
  }
`;

export default React.memo(ShootingStars);
