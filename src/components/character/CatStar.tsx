import React from 'react';

import styled, { keyframes } from 'styled-components';

const CatStar = () => {
  return (
    <CatStarLayout>
      {/* 별빛 */}
      <rect
        x="96"
        y="12"
        width="4"
        height="4"
        fill="black"
        stroke="black"
        strokeWidth={0.5}
        className="cat star right-star"
      />
      <rect
        x="92"
        y="8"
        width="4"
        height="4"
        fill="black"
        stroke="black"
        strokeWidth={0.5}
        className="cat star right-star"
      />
      <rect
        x="8"
        y="44"
        width="4"
        height="4"
        fill="black"
        stroke="black"
        strokeWidth={0.5}
        className="cat star left-star"
      />
      <rect
        x="4"
        y="40"
        width="4"
        height="4"
        fill="black"
        stroke="black"
        strokeWidth={0.5}
        className="cat star left-star"
      />
      <rect
        x="88"
        y="12"
        width="4"
        height="4"
        fill="black"
        stroke="black"
        strokeWidth={0.5}
        className="cat star right-star"
      />
      <rect y="44" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} className="cat star left-star" />
      <rect
        x="92"
        y="16"
        width="4"
        height="4"
        fill="black"
        stroke="black"
        strokeWidth={0.5}
        className="cat star right-star"
      />
      <rect
        x="4"
        y="48"
        width="4"
        height="4"
        fill="black"
        stroke="black"
        strokeWidth={0.5}
        className="cat star left-star"
      />
      <rect
        x="92"
        y="12"
        width="4"
        height="4"
        fill="#FDD001"
        stroke="#FDD001"
        strokeWidth={0.5}
        className="cat star star-color right-star"
      />
      <rect
        x="4"
        y="44"
        width="4"
        height="4"
        fill="#FDD001"
        stroke="#FDD001"
        strokeWidth={0.5}
        className="cat star star-color left-star"
      />
    </CatStarLayout>
  );
};

export const CatPopup = keyframes`
  0% {
		transform: translate(0);
	}
	50% {
		transform: translate(-1%, -3%);
	}
	100% {
		transform: translate(0);
	}
`;

const CatRightStarAnimation = keyframes`
  0% {
    transform: translate(0);
  }
  100% {
    transform: translateY(15%) translateX(5%) rotate(-5deg);    
  }
`;

const CatLeftStarAnimation = keyframes`
  0% {
    transform: translateX(2%);
  }
  50% {
    transform: translateY(-5%) translateX(2%);    
  }
  100% {
    transform: translateY(5%) rotate(-1deg) translateX(2%);    
  }
`;

const CatStarLayout = styled.g`
  -moz-animation: ${CatPopup} 2s infinite alternate ease-in-out;
  -webkit-animation: ${CatPopup} 2s infinite alternate ease-in-out;
  animation: ${CatPopup} 2s infinite alternate ease-in-out;
  .left-star {
    -moz-animation: ${CatLeftStarAnimation} 12s infinite alternate ease-in-out;
    -webkit-animation: ${CatLeftStarAnimation} 12s infinite alternate ease-in-out;
    animation: ${CatLeftStarAnimation} 12s infinite alternate ease-in-out;
  }
  .right-star {
    -moz-animation: ${CatRightStarAnimation} 6s infinite alternate ease-in-out;
    -webkit-animation: ${CatRightStarAnimation} 6s infinite alternate ease-in-out;
    animation: ${CatRightStarAnimation} 6s infinite alternate ease-in-out;
  }
`;

export default React.memo(CatStar);
