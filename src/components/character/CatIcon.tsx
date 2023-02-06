import React from 'react';

import styled from 'styled-components';

import { CatColor, CatStyles, CatTheme } from '@constants/characters';

export interface CatIconProps {
  catTheme: CatTheme;
}

const CatIcon = ({ catTheme = 'white' }: CatIconProps) => {
  return (
    <CatIconLayout {...CatColor[catTheme]}>
      <svg width="40" height="36" viewBox="20 5 90 60" fill="none">
        {/* 왼쪽 귀 */}
        <rect x="28" width="4" height="16" fill="black" stroke="black" strokeWidth={0.5} className="cat left-ear" />
        <rect x="32" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} className="cat left-ear" />
        <rect
          x="36"
          y="4"
          width="4"
          height="4"
          fill="black"
          stroke="black"
          strokeWidth={0.5}
          className="cat left-ear"
        />
        <rect x="32" y="8" width="4" height="8" className="cat shadow left-ear" />
        <rect x="32" y="4" width="4" height="4" className="cat body left-ear left-ear-color" />
        <rect x="36" y="8" width="4" height="4" className="cat body left-ear left-ear-color" />
        {/* 오른쪽 귀 */}
        <rect x="68" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} className="cat right-ear" />
        <rect x="72" width="4" height="16" fill="black" stroke="black" strokeWidth={0.5} className="cat right-ear" />
        <rect x="64" y="8" width="4" height="4" className="cat body right-ear right-ear-color" />
        <rect x="68" y="4" width="4" height="4" className="cat body right-ear right-ear-color" />
        <rect
          x="64"
          y="4"
          width="4"
          height="4"
          fill="black"
          stroke="black"
          strokeWidth={0.5}
          className="cat right-ear"
        />
        <rect x="68" y="8" width="4" height="8" className="cat shadow right-ear" />
        {/* 고양이 껍데기 */}
        <rect x="20" y="24" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} />
        <rect x="20" y="32" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} />
        <rect x="72" y="36" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} />
        <rect x="80" y="24" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} />
        <rect x="80" y="32" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} />
        <rect x="24" y="16" width="4" height="20" fill="black" stroke="black" strokeWidth={0.5} />
        <rect x="76" y="16" width="4" height="20" fill="black" stroke="black" strokeWidth={0.5} />
        {/* 머리껍데기 */}
        <rect x="40" y="8" width="24" height="4" fill="black" stroke="black" />
        {/* 그림자 */}
        <rect x="32" y="12" width="8" height="4" className="cat shadow" />
        <rect x="64" y="12" width="8" height="4" className="cat shadow" />
        <rect x="28" y="32" width="4" height="4" className="cat shadow" />
        <rect x="32" y="36" width="4" height="8" className="cat shadow" />

        <rect x="72" y="32" width="4" height="4" className="cat shadow" />
        <rect x="68" y="36" width="4" height="4" className="cat shadow" />

        {/* 얼굴 */}
        <rect x="48" y="16" width="4" height="4" className="cat body" />
        <rect x="52" y="16" width="4" height="4" className="cat body" />
        <rect x="60" y="32" width="4" height="4" className="cat body" />
        <rect x="44" y="20" width="4" height="4" className="cat body" />
        <rect x="48" y="20" width="4" height="4" className="cat body" />
        <rect x="40" y="20" width="4" height="4" className="cat body" />
        <rect x="52" y="20" width="4" height="4" className="cat body" />
        <rect x="60" y="20" width="4" height="4" className="cat body" />
        <rect x="56" y="20" width="4" height="4" className="cat body" />
        <rect x="44" y="24" width="4" height="4" className="cat body" />
        <rect x="48" y="24" width="4" height="4" className="cat body" />
        <rect x="52" y="24" width="4" height="4" className="cat body" />
        <rect x="56" y="24" width="4" height="4" className="cat body" />
        <rect x="32" y="32" width="4" height="4" className="cat body" />
        <rect x="36" y="32" width="4" height="4" className="cat body" />
        <rect x="36" y="36" width="4" height="4" className="cat body" />
        <rect x="40" y="32" width="4" height="4" className="cat body" />
        <rect x="64" y="32" width="4" height="4" className="cat body" />
        <rect x="64" y="36" width="4" height="4" className="cat body" />
        <rect x="68" y="32" width="4" height="4" className="cat body" />
        <rect x="44" y="28" width="4" height="4" className="cat body" />
        <rect x="56" y="28" width="4" height="4" className="cat body" />
        {/* 얼굴 왼쪽  */}
        <rect x="28" y="24" width="4" height="4" className="cat body left-face" />
        <rect x="32" y="24" width="4" height="4" className="cat body left-face" />
        <rect x="28" y="28" width="4" height="4" className="cat body left-face" />
        <rect x="32" y="28" width="4" height="4" className="cat body left-face" />
        {/* 얼굴 오른쪽 */}
        <rect x="68" y="24" width="4" height="4" className="cat body right-face" />
        <rect x="72" y="24" width="4" height="4" className="cat body right-face" />
        <rect x="68" y="28" width="4" height="4" className="cat body right-face" />
        <rect x="72" y="28" width="4" height="4" className="cat body right-face" />

        {/* 왼쪽 윗머리 */}
        <rect x="28" y="16" width="12" height="8" className="cat body left-head" />
        <rect x="40" y="12" width="8" height="8" className="cat body left-head" />
        {/* 오른쪽 윗머리 */}
        <rect x="56" y="12" width="8" height="8" className="cat body right-head" />
        <rect x="64" y="16" width="12" height="8" className="cat body right-head" />

        {/* 얼굴 중앙 */}
        <rect x="48" y="12" width="8" height="4" className="cat body head" />
        <rect x="32" y="24" width="40" height="12" className="cat body face" />
        <rect x="36" y="20" width="32" height="20" className="cat body face" />
        <rect x="40" y="16" width="24" height="28" className="cat body face" />
        {CatColor[catTheme].leftHead && (
          <>
            {/* 왼쪽 윗머리 */}
            <rect x="28" y="16" width="12" height="8" className="cat body left-head" />
            <rect x="40" y="12" width="8" height="8" className="cat body left-head" />
          </>
        )}
        {CatColor[catTheme].rightHead && (
          <>
            {/* 오른쪽 윗머리 */}
            <rect x="56" y="12" width="8" height="8" className="cat body right-head" />
            <rect x="64" y="16" width="12" height="8" className="cat body right-head" />
          </>
        )}
        {/* 정수리 */}
        {CatColor[catTheme].middleHead && <rect x="48" y="16" width="8" height="4" className="cat body head" />}
        {CatColor[catTheme].mouse && (
          <>
            {/* 얼굴 중앙 입부분 */}
            <rect x="48" y="28" width="8" height="4" className="cat body mouse" />
            <rect x="44" y="32" width="16" height="4" className="cat body mouse" />
            <rect x="40" y="36" width="24" height="4" className="cat body mouse" />
          </>
        )}
        {/* 눈 왼쪽 */}
        <rect x="40" y="28" width="4" height="4" className="cat eye-below left-eye-below-right" />
        <rect x="36" y="28" width="4" height="4" className="cat eye-below left-eye-below-left" />
        <rect x="42" y="28" width="2" height="2" fill="#D9D9D9" stroke="#D9D9D9" />
        {/* 눈 오른쪽 */}
        <rect x="64" y="28" width="4" height="4" className="cat eye-below right-eye-below-right" />
        <rect x="60" y="28" width="4" height="4" className="cat eye-below right-eye-below-left" />
        <rect x="66" y="28" width="2" height="2" fill="#D9D9D9" stroke="#D9D9D9" />
        {/* 눈망울 */}
        <rect x="36" y="24" width="8" height="4" fill="#381616" stroke="#381616" className="cat eye" />
        <rect x="60" y="24" width="8" height="4" fill="#381616" stroke="#381616" className="cat eye" />
      </svg>
    </CatIconLayout>
  );
};

const CatIconLayout = styled.div<CatStyles>`
  fill: ${(props) => props.body};
  stroke: ${(props) => props.body};
  width: 28px;
  height: 23px;
  stroke-width: 0.7px;
  .shadow {
    fill: ${(props) => props.shadow};
    stroke: ${(props) => props.shadow};
    stroke-width: 0.4px;
  }
  .left-eye-below-left {
    fill: ${(props) => props.leftEyeBelowLeft};
    stroke: ${(props) => props.leftEyeBelowLeft};
  }
  .left-eye-below-right {
    fill: ${(props) => props.leftEyeBelowRight};
    stroke: ${(props) => props.leftEyeBelowRight};
  }
  .right-eye-below-left {
    fill: ${(props) => props.rightEyeBelowLeft};
    stroke: ${(props) => props.rightEyeBelowLeft};
  }
  .right-eye-below-right {
    fill: ${(props) => props.rightEyeBelowRight};
    stroke: ${(props) => props.rightEyeBelowRight};
  }
  .head {
    fill: ${(props) => props.middleHead ?? props.body};
    stroke: ${(props) => props.middleHead ?? props.body};
  }
  .left-head {
    fill: ${(props) => props.leftHead ?? props.body};
    stroke: ${(props) => props.leftHead ?? props.body};
  }
  .right-head {
    fill: ${(props) => props.rightHead ?? props.body};
    stroke: ${(props) => props.rightHead ?? props.body};
  }
  .mouse {
    fill: ${(props) => props.mouse ?? props.body};
    stroke: ${(props) => props.mouse ?? props.body};
    stroke-width: 0.2px;
  }
  .face {
    fill: ${(props) => props.face ?? props.body};
    stroke: ${(props) => props.face ?? props.body};
  }
`;

export default React.memo(CatIcon);
