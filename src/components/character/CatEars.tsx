import React from 'react';

import styled, { keyframes } from 'styled-components';

const CatEars = () => {
  return (
    <CatEarLayout>
      {/* 왼쪽 귀 */}
      <rect x="28" width="4" height="16" fill="black" stroke="black" strokeWidth={0.5} className="cat left-ear" />
      <rect x="32" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} className="cat left-ear" />
      <rect x="36" y="4" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} className="cat left-ear" />
      <rect x="32" y="8" width="4" height="8" className="cat shadow left-ear" />
      <rect x="32" y="4" width="4" height="4" className="cat body left-ear left-ear-color" />
      <rect x="36" y="8" width="4" height="4" className="cat body left-ear left-ear-color" />
      {/* 오른쪽 귀 */}
      <rect x="68" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} className="cat right-ear" />
      <rect x="72" width="4" height="16" fill="black" stroke="black" strokeWidth={0.5} className="cat right-ear" />
      <rect x="64" y="8" width="4" height="4" className="cat body right-ear right-ear-color" />
      <rect x="68" y="4" width="4" height="4" className="cat body right-ear right-ear-color" />
      <rect x="64" y="4" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} className="cat right-ear" />
      <rect x="68" y="8" width="4" height="8" className="cat shadow right-ear" />
    </CatEarLayout>
  );
};

const CatRightEarAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0.5deg) translateX(0.4%);
  } 
`;

const CatLeftEarAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0.5deg) translateX(-0.4%);
  } 
`;

const CatEarLayout = styled.g`
  .left-ear {
    -moz-animation: ${CatLeftEarAnimation} 0.16s infinite alternate linear;
    -webkit-animation: ${CatLeftEarAnimation} 0.16s infinite alternate linear;
    animation: ${CatLeftEarAnimation} 0.16s infinite alternate linear;
  }
  .right-ear {
    -moz-animation: ${CatRightEarAnimation} 0.16s infinite alternate linear;
    -webkit-animation: ${CatRightEarAnimation} 0.16s infinite alternate linear;
    animation: ${CatRightEarAnimation} 0.16s infinite alternate linear;
  }
`;

export default CatEars;
