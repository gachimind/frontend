import { useEffect, useRef, useState } from 'react';

import styled, { keyframes } from 'styled-components';

import cursorIcon from '@assets/svg_cursorIcon.svg';
import { CatColor, CatStyles, CatTheme, RocketColor, RocketTheme } from '@constants/characters';

import CatEars from './CatEars';
import CatStar from './CatStar';
import Rocket from './Rocket';

export interface CatProps {
  type: 'face' | 'body' | 'rocket';
  catTheme: CatTheme;
  rocketTheme: RocketTheme;
  scale?: number;
  hasIdlePopupAnimation?: boolean;
  letsMove?: {
    millSecond: number;
  };
}

const Cat = ({
  type = 'rocket',
  catTheme = 'white',
  rocketTheme = 'red',
  scale = 1,
  hasIdlePopupAnimation = false,
  letsMove = { millSecond: 0 },
}: CatProps) => {
  const catRef = useRef<SVGSVGElement>(null);
  const catTailRef = useRef<SVGSVGElement>(null);
  const [startMove, setStartMove] = useState<boolean>(false);

  useEffect(() => {
    if (letsMove.millSecond === 0) {
      return;
    }
    if (!catRef) {
      return;
    }
    catRef.current?.classList.add('ready-to-move');
    const wagTailTimoutId = setTimeout(() => {
      catTailRef.current?.classList.add('wag-tail');
      setStartMove(true);
    }, 1000);
    const moveTimeoutId = setTimeout(() => {
      catRef.current?.classList.remove('ready-to-move');
      catTailRef.current?.classList.remove('wag-tail');
      setStartMove(false);
    }, letsMove.millSecond + 1000);
    return () => {
      clearTimeout(moveTimeoutId);
      clearTimeout(wagTailTimoutId);
    };
  }, [letsMove]);

  const handleCatClick = () => {
    if (!catTailRef) {
      return;
    }
    if (catTailRef.current?.classList.contains('wag-tail')) {
      return;
    }
    catTailRef.current?.classList.add('wag-tail');
    setTimeout(() => {
      catTailRef.current?.classList.remove('wag-tail');
    }, 1200);
  };

  return (
    <CatLayout style={{ transform: `scale(${scale})` }} type={type} hasPopup={hasIdlePopupAnimation}>
      <div>
        <svg ref={catRef} width="112" height="120" viewBox="0 0 142 120" fill="none">
          <g className="cat-stars">
            <CatStar data-attr="star" />
          </g>
          <CatGroup {...CatColor[catTheme]} onClick={handleCatClick}>
            <CatEars />
            {/* 고양이 껍데기 */}
            <rect x="28" y="36" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} />
            <rect x="20" y="24" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} />
            <rect x="20" y="32" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} />
            <rect x="72" y="36" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} />
            <rect x="80" y="24" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} />
            <rect x="80" y="32" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} />
            <rect x="24" y="16" width="4" height="20" fill="black" stroke="black" strokeWidth={0.5} />
            <rect x="76" y="16" width="4" height="20" fill="black" stroke="black" strokeWidth={0.5} />
            {type !== 'face' && (
              <>
                <rect x="32" y="60" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} />
                <rect x="68" y="60" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} />
                <rect x="24" y="60" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} />
                <rect x="32" y="68" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} />
                <rect x="40" y="68" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} />
                <rect x="60" y="68" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} />
                <rect x="68" y="68" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} />
                <rect x="76" y="60" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} />
                <rect x="20" y="48" width="4" height="12" fill="black" stroke="black" strokeWidth={0.5} />
                <rect x="80" y="48" width="4" height="12" fill="black" stroke="black" strokeWidth={0.5} />
                <rect x="56" y="60" width="4" height="12" fill="black" stroke="black" strokeWidth={0.5} />
                <rect x="44" y="60" width="4" height="12" fill="black" stroke="black" strokeWidth={0.5} />
                <rect x="36" y="64" width="4" height="8" fill="black" stroke="black" strokeWidth={0.5} />
                <rect x="64" y="64" width="4" height="8" fill="black" stroke="black" strokeWidth={0.5} />
                <rect x="72" y="64" width="4" height="8" fill="black" stroke="black" strokeWidth={0.5} />
                <rect x="28" y="64" width="4" height="8" fill="black" stroke="black" strokeWidth={0.5} />
                <rect x="76" y="40" width="4" height="8" fill="black" stroke="black" strokeWidth={0.5} />
                <rect x="24" y="40" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} />
                <rect x="24" y="44" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} />
              </>
            )}
            {/* 머리껍데기 */}
            <rect x="40" y="8" width="24" height="4" fill="black" stroke="black" />
            {/* 그림자 */}
            <rect x="32" y="12" width="8" height="4" className="cat shadow" />
            <rect x="64" y="12" width="8" height="4" className="cat shadow" />
            <rect x="28" y="32" width="4" height="4" className="cat shadow" />
            <rect x="32" y="36" width="4" height="8" className="cat shadow" />
            <rect x="68" y="40" width="4" height="4" className="cat shadow" />

            <rect x="72" y="32" width="4" height="4" className="cat shadow" />
            <rect x="68" y="36" width="4" height="4" className="cat shadow" />
            <rect x="72" y="40" width="4" height="4" className="cat shadow" />
            {type !== 'face' && (
              <>
                <rect x="28" y="40" width="4" height="8" className="cat shadow" />
                <rect x="28" y="60" width="4" height="4" className="cat shadow" />
                <rect x="32" y="56" width="4" height="4" className="cat shadow" />
                <rect x="32" y="64" width="4" height="4" className="cat shadow" />
                <rect x="40" y="64" width="4" height="4" className="cat shadow" />
                <rect x="44" y="56" width="4" height="4" className="cat shadow" />
                <rect x="76" y="48" width="4" height="12" className="cat shadow" />
                <rect x="24" y="48" width="4" height="12" className="cat shadow" />
                <rect x="48" y="64" width="4" height="4" className="cat shadow" />
                <rect x="52" y="64" width="4" height="4" className="cat shadow" />
                <rect x="56" y="56" width="4" height="4" className="cat shadow" />
                <rect x="68" y="56" width="4" height="4" className="cat shadow" />
                <rect x="60" y="64" width="4" height="4" className="cat shadow" />
                <rect x="72" y="60" width="4" height="4" className="cat shadow" />
                <rect x="68" y="64" width="4" height="4" className="cat shadow" />
                <rect x="72" y="44" width="4" height="4" className="cat shadow" />
                {/* 발톱 */}
                <rect x="40" y="64" width="4" height="4" strokeWidth={0.5} className="cat toe" />
                <rect x="60" y="64" width="4" height="4" strokeWidth={0.5} className="cat toe" />
              </>
            )}
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
            <rect x="64" y="40" width="4" height="4" className="cat body" />
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
            {type !== 'face' && (
              <>
                {/* 몸통 - 일반 */}
                <rect x="32" y="44" width="4" height="4" className="cat body" />
                <rect x="36" y="44" width="4" height="4" className="cat body" />
                <rect x="64" y="44" width="4" height="4" className="cat body" />
                <rect x="28" y="48" width="4" height="4" className="cat body" />
                <rect x="28" y="52" width="4" height="4" className="cat body" />
                <rect x="28" y="56" width="4" height="4" className="cat body" />
                <rect x="32" y="48" width="4" height="4" className="cat body" />
                <rect x="36" y="48" width="4" height="4" className="cat body" />
                <rect x="32" y="52" width="4" height="4" className="cat body" />
                <rect x="36" y="52" width="4" height="4" className="cat body" />
                <rect x="36" y="56" width="4" height="4" className="cat body" />
                <rect x="36" y="60" width="4" height="4" className="cat body" />
                <rect x="40" y="56" width="4" height="4" className="cat body" />
                <rect x="40" y="60" width="4" height="4" className="cat body" />
                <rect x="64" y="60" width="4" height="4" className="cat body" />
                <rect x="60" y="56" width="4" height="4" className="cat body" />
                <rect x="60" y="60" width="4" height="4" className="cat body" />
                {/* 몸통 중앙 */}
                <rect x="40" y="44" width="24" height="12" className="cat body" />
                <rect x="48" y="56" width="8" height="8" className="cat body body-center" />
                {/* 몸통 우측 */}
                <rect x="72" y="40" width="4" height="24" className="cat body body-right" strokeWidth={0.5} />
                {!CatColor[catTheme].rightBody && (
                  <rect x="72" y="40" width="4" height="8" className="cat shadow" strokeWidth={0.5} />
                )}
                <rect x="68" y="44" width="4" height="16" className="cat body body-right" strokeWidth={0.5} />
                {catTheme === 'mix' && (
                  <rect
                    x="76"
                    y="48"
                    width="4"
                    height="12"
                    className="cat body"
                    fill="#212122"
                    stroke="#212122"
                    strokeWidth={0.5}
                  />
                )}
                <rect x="64" y="48" width="4" height="12" className="cat body body-right" strokeWidth={0.3} />
                {/* 몸통 좌측 */}
                <rect x="28" y="40" width="4" height="12" className="cat body body-left" />
                <rect x="32" y="40" width="8" height="4" className="cat body body-left" />
                <rect x="32" y="44" width="4" height="4" className="cat body body-left" />
                {catTheme === 'mix' ? (
                  <rect
                    x="28"
                    y="40"
                    width="4"
                    height="8"
                    className="cat body"
                    fill="#E87409"
                    stroke="#E87409"
                    strokeWidth={0.5}
                  />
                ) : (
                  <rect x="28" y="40" width="4" height="8" className="cat shadow" />
                )}
                {/* 꼬리 */}
                <CatTail ref={catTailRef}>
                  <rect
                    x="92"
                    y="60"
                    width="4"
                    height="4"
                    fill="black"
                    stroke="black"
                    strokeWidth={0.5}
                    className="cat tail"
                  />
                  <rect
                    x="80"
                    y="56"
                    width="4"
                    height="4"
                    fill="black"
                    stroke="black"
                    strokeWidth={0.5}
                    className="cat tail"
                  />
                  <rect
                    x="76"
                    y="60"
                    width="4"
                    height="4"
                    fill="black"
                    stroke="black"
                    strokeWidth={0.5}
                    className="cat tail"
                  />
                  <rect
                    x="92"
                    y="56"
                    width="4"
                    height="4"
                    fill="black"
                    stroke="black"
                    strokeWidth={0.5}
                    className="cat tail"
                  />
                  <rect
                    x="96"
                    y="52"
                    width="4"
                    height="4"
                    fill="black"
                    stroke="black"
                    strokeWidth={0.5}
                    className="cat tail"
                  />
                  <rect
                    x="108"
                    y="36"
                    width="4"
                    height="4"
                    fill="black"
                    stroke="black"
                    strokeWidth={0.5}
                    className="cat tail"
                  />
                  <rect
                    x="84"
                    y="52"
                    width="4"
                    height="4"
                    fill="black"
                    stroke="black"
                    strokeWidth={0.5}
                    className="cat tail"
                  />
                  <rect
                    x="84"
                    y="64"
                    width="8"
                    height="4"
                    fill="black"
                    stroke="black"
                    strokeWidth={0.5}
                    className="cat tail"
                  />
                  <rect
                    x="104"
                    y="40"
                    width="8"
                    height="4"
                    fill="black"
                    stroke="black"
                    strokeWidth={0.5}
                    className="cat tail"
                  />
                  <rect
                    x="96"
                    y="32"
                    width="12"
                    height="4"
                    fill="black"
                    stroke="black"
                    strokeWidth={0.5}
                    className="cat tail"
                  />
                  <rect
                    x="76"
                    y="68"
                    width="8"
                    height="4"
                    fill="black"
                    stroke="black"
                    strokeWidth={0.5}
                    className="cat tail"
                  />
                  <rect
                    x="92"
                    y="36"
                    width="4"
                    height="8"
                    fill="black"
                    stroke="black"
                    strokeWidth={0.5}
                    className="cat tail"
                  />
                  <rect
                    x="100"
                    y="44"
                    width="4"
                    height="8"
                    fill="black"
                    stroke="black"
                    strokeWidth={0.5}
                    className="cat tail"
                  />
                  <rect
                    x="88"
                    y="44"
                    width="4"
                    height="8"
                    fill="black"
                    stroke="black"
                    strokeWidth={0.5}
                    className="cat tail"
                  />
                  <rect x="76" y="64" width="8" height="4" className="cat body tail" />
                  <rect x="84" y="56" width="8" height="4" className="cat body tail" />
                  <rect x="88" y="52" width="8" height="4" className="cat body tail" />
                  <rect x="92" y="44" width="8" height="8" className="cat body tail" />
                  <rect x="96" y="36" width="8" height="8" className="cat body tail tail-edge" strokeWidth={0.3} />
                  <rect x="104" y="36" width="4" height="4" className="cat body tail tail-edge" strokeWidth={0.3} />
                  <rect x="80" y="60" width="12" height="4" className="cat body tail" />
                </CatTail>
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
            {/* 얼굴과 몸통의 경계 */}
            {type === 'face' && (
              <>
                <rect x="32" y="40" width="40" height="4" className="cat shadow" strokeWidth={0.3} />
                <rect x="28" y="40" width="4" height="4" fill="black" stroke="black" strokeWidth={0.3} />
                <rect x="72" y="40" width="4" height="4" fill="black" stroke="black" strokeWidth={0.3} />
                <rect x="32" y="44" width="40" height="4" fill="black" stroke="black" strokeWidth={0.3} />
                <rect x="28" y="36" width="4" height="4" fill="black" stroke="black" strokeWidth={0.2} />
                <rect x="72" y="36" width="4" height="4" fill="black" stroke="black" strokeWidth={0.2} />
              </>
            )}
            {/* 로케트면 빨강 아니면 검정 */}
            {type !== 'face' && <rect x="48" y="68" width="8" height="4" fill={'black'} stroke={'black'} />}
          </CatGroup>
          {type === 'rocket' && <Rocket startMove={startMove} rocketStyle={RocketColor[rocketTheme]} />}
        </svg>
      </div>
    </CatLayout>
  );
};

export const CatPopup = keyframes`
  0% {
		transform: translate(0);
	}
	50% {
		transform: translate(0.7%, 2%);
	}
	100% {
		transform: translate(0);
	}
`;

export const CatReadyToMove = keyframes`
  0% {
		transform: translateY(0);
	}
	80% {
		transform: translateY(10%);
	}
	100% {
		transform: translate(0);
	}
`;

const CatTailAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(8deg) translateY(-9%) translateX(5%);
  }
`;

const CatLayout = styled.div<{ type: 'face' | 'body' | 'rocket'; hasPopup: boolean }>`
  position: relative;
  padding: 6px ${(props) => (props.type === 'face' ? '0' : '10px')} 4px 10px;
  width: ${(props) => (props.type === 'face' ? '100px' : '112px')};
  height: ${(props) => (props.type === 'face' ? '74px' : props.type === 'rocket' ? '132px' : '88px')};

  & > div {
    position: absolute;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
  & > div > svg {
    -moz-animation: ${CatPopup} ${(props) => (props.hasPopup ? 2 : 0)}s ease infinite;
    -webkit-animation: ${CatPopup} ${(props) => (props.hasPopup ? 2 : 0)}s ease infinite;
    animation: ${CatPopup} ${(props) => (props.hasPopup ? 2 : 0)}s ease infinite;
  }

  .ready-to-move {
    -moz-animation: ${CatReadyToMove} 1s linear;
    -webkit-animation: ${CatReadyToMove} 1s linear;
    animation: ${CatReadyToMove} 1s linear;
  }
`;

const CatGroup = styled.g<CatStyles>`
  fill: ${(props) => props.body};
  stroke: ${(props) => props.body};
  stroke-width: 0.7px;
  cursor: url(${cursorIcon}), pointer;
  .body-center {
    fill: ${(props) => props.middleBody ?? props.body};
    stroke: ${(props) => props.middleBody ?? props.body};
  }
  .body-right {
    fill: ${(props) => props.rightBody ?? props.body};
    stroke: ${(props) => props.rightBody ?? props.body};
  }
  .body-left {
    fill: ${(props) => props.leftBody ?? props.body};
    stroke: ${(props) => props.leftBody ?? props.body};
  }
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
  .tail-edge {
    fill: ${(props) => props.tailEdge ?? props.shadow};
    stroke: ${(props) => props.tailEdge ?? props.shadow};
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
  .toe {
    fill: ${(props) => props.toe ?? props.shadow};
    stroke: ${(props) => props.toe ?? props.shadow};
  }
  .face {
    fill: ${(props) => props.face ?? props.body};
    stroke: ${(props) => props.face ?? props.body};
  }
  .wag-tail {
    -moz-animation: ${CatTailAnimation} 0.08s infinite alternate linear;
    -webkit-animation: ${CatTailAnimation} 0.08s infinite alternate linear;
    animation: ${CatTailAnimation} 0.08s infinite alternate linear;
  }
`;

const CatTail = styled.g``;

export default Cat;
