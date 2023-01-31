import styled, { css, keyframes } from 'styled-components';

import { RocketStyles } from '@constants/characters';

export interface RocketProps {
  rocketStyle: RocketStyles;
  startMove: boolean;
}

const Rocket = ({ rocketStyle, startMove }: RocketProps) => {
  return (
    <RocketLayout {...rocketStyle}>
      {/* 로케트면 빨강 아니면 검정 */}
      <rect x="48" y="68" width="8" height="4" className="rocket base" />
      {/* 로케트 연결부분 몸통 */}
      <rect x="48" y="76" width="8" height="12" fill="#D9D9D9" stroke="#D9D9D9" strokeWidth={0.5} />
      <rect x="36" y="76" width="4" height="4" fill="#D9D9D9" stroke="#D9D9D9" strokeWidth={0.5} />
      <rect x="32" y="72" width="4" height="16" fill="#D9D9D9" stroke="#D9D9D9" strokeWidth={0.5} />
      <rect x="68" y="72" width="4" height="16" fill="#D9D9D9" stroke="#D9D9D9" strokeWidth={0.5} />
      <rect x="64" y="76" width="4" height="4" fill="#D9D9D9" stroke="#D9D9D9" strokeWidth={0.5} />
      {/* 로케트 시작부분 */}
      <rect x="40" y="72" width="24" height="4" className="rocket base" strokeWidth={0.5} />
      <rect x="40" y="72" width="24" height="4" className="rocket base" strokeWidth={0.5} />
      <FireGroup startMove={startMove}>
        {/* 빨간 불꽃 */}
        <g className="red-fires">
          <rect x="44" y="108" width="4" height="4" className="rocket side-fire" />
          <rect x="40" y="80" width="4" height="12" className="rocket side-fire" />
          <rect x="36" y="88" width="4" height="12" className="rocket side-fire" />
          <rect x="40" y="100" width="4" height="8" className="rocket side-fire" />
          <rect x="60" y="100" width="4" height="8" className="rocket side-fire" />
          <rect x="64" y="88" width="4" height="12" className="rocket side-fire" />
          <rect x="48" y="112" width="8" height="4" className="rocket side-fire" />
          <rect x="60" y="80" width="4" height="12" className="rocket side-fire" />
          <rect x="56" y="108" width="4" height="4" className="rocket side-fire" />
        </g>
        <g className="orange-fires">
          {/* 주황불꽃 */}
          <rect x="44" y="80" width="4" height="12" className="rocket middle-fire" />
          <rect x="40" y="92" width="4" height="8" className="rocket middle-fire" />
          <rect x="56" y="80" width="4" height="12" className="rocket middle-fire" />
          <rect x="60" y="92" width="4" height="8" className="rocket middle-fire" />
          <rect x="44" y="100" width="4" height="8" className="rocket middle-fire" />
          <rect x="56" y="100" width="4" height="8" className="rocket middle-fire" />
          <rect x="48" y="104" width="8" height="8" className="rocket middle-fire" />
        </g>
        {/* 노란불꽃 */}
        <rect x="48" y="84" width="8" height="20" className="rocket core-fire" />
        <rect x="44" y="92" width="4" height="4" className="rocket core-fire" />
        <rect x="44" y="96" width="4" height="4" className="rocket core-fire" />
        <rect x="56" y="92" width="4" height="4" className="rocket core-fire" />
        <rect x="56" y="96" width="4" height="4" className="rocket core-fire" />
        <rect x="64" y="100" width="4" height="8" fill="black" stroke="black" strokeWidth={0.5} className="rocket" />
        <rect x="36" y="100" width="4" height="8" fill="black" stroke="black" strokeWidth={0.5} className="rocket" />
        <rect x="60" y="108" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} className="rocket" />
        <rect x="56" y="112" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} className="rocket" />
        <rect x="40" y="108" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} className="rocket" />
        <rect x="44" y="112" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} className="rocket" />
        <rect x="48" y="116" width="8" height="4" fill="black" stroke="black" strokeWidth={0.5} className="rocket" />
        <rect x="32" y="84" width="4" height="20" fill="black" stroke="black" strokeWidth={0.5} className="rocket" />
        <rect x="68" y="84" width="4" height="20" fill="black" stroke="black" strokeWidth={0.5} className="rocket" />
      </FireGroup>
      {/* 로케트 몸체 */}
      <rect x="56" y="80" width="4" height="4" fill="#72707A" stroke="#72707A" strokeWidth={0.5} />
      <rect x="44" y="80" width="4" height="4" fill="#72707A" stroke="#72707A" strokeWidth={0.5} />
      <rect x="36" y="72" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} className="rocket" />
      <rect x="64" y="72" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} className="rocket" />
      <rect x="44" y="76" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} className="rocket" />
      <rect x="56" y="76" width="4" height="4" fill="black" stroke="black" strokeWidth={0.5} className="rocket" />
      <rect x="28" y="64" width="4" height="24" fill="black" stroke="black" strokeWidth={0.5} className="rocket" />
      <rect x="36" y="80" width="4" height="12" fill="black" stroke="black" strokeWidth={0.5} className="rocket" />
      <rect x="40" y="76" width="4" height="8" fill="black" stroke="black" strokeWidth={0.5} className="rocket" />
      <rect x="60" y="76" width="4" height="8" fill="black" stroke="black" strokeWidth={0.5} className="rocket" />
      <rect x="64" y="80" width="4" height="12" fill="black" stroke="black" strokeWidth={0.5} className="rocket" />
      <rect x="72" y="72" width="4" height="16" fill="black" stroke="black" strokeWidth={0.5} className="rocket" />
      <rect x="36" y="68" width="4" height="4" className="rocket base" strokeWidth={0.5} />
      <rect x="64" y="68" width="4" height="4" className="rocket base" strokeWidth={0.5} />
    </RocketLayout>
  );
};

const RocketIdleAnimation = keyframes`
	0% {
        transform: scaleY(1.0);
    }
    50% {
        transform: scaleY(1.015);
    }
    100% {
        transform: scaleY(1.0);
    }
`;

const RocketFireAnimation = keyframes`
	0% {
        transform: scaleY(1.0);
    }
    50% {
        transform: scaleY(1.055);
    }
    100% {
        transform: scaleY(1.0);
    }
`;

const RocketOpacity = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.95;
    }
    100% {
        opacity: 1;
    }
`;

const RocketLayout = styled.g<RocketStyles>`
  .side-fire {
    fill: ${(props) => props.side};
    stroke: ${(props) => props.side};
  }
  .middle-fire {
    fill: ${(props) => props.middle};
    stroke: ${(props) => props.middle};
    stroke-width: 0.2px;
  }
  .core-fire {
    fill: ${(props) => props.core};
    stroke: ${(props) => props.core};
    stroke-width: 0.2px;
  }
  .base {
    fill: ${(props) => props.base};
    stroke: ${(props) => props.base};
  }
`;

const fireRule = css(['', ' 0.1s linear infinite;'] as any as TemplateStringsArray, RocketFireAnimation);

const idleRule = css(['', ' 0.2s linear infinite;'] as any as TemplateStringsArray, RocketIdleAnimation);

const FireGroup = styled.g<{ startMove: boolean }>`
  -moz-animation: ${(props) => (props.startMove ? fireRule : idleRule)};
  -webkit-animation: ${(props) => (props.startMove ? fireRule : idleRule)};
  animation: ${(props) => (props.startMove ? fireRule : idleRule)};

  .red-fires {
    -moz-animation: ${RocketOpacity} 4s linear infinite;
    -webkit-animation: ${RocketOpacity} 4s linear infinite;
    animation: ${RocketOpacity} 4s linear infinite;
  }
  .orange-fires {
    -moz-animation: ${RocketOpacity} 2.1s ease infinite;
    -webkit-animation: ${RocketOpacity} 2.1s ease infinite;
    animation: ${RocketOpacity} 2.1s ease infinite;
  }
`;

export default Rocket;
