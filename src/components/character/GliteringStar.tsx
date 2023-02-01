import styled, { keyframes } from 'styled-components';

/**
 * left: px
 * top: px
 * delay: ms
 */
export interface GliteringStarProps {
  left: number;
  top: number;
  delay: number;
}

const GliteringStar = ({ left, top, delay }: GliteringStarProps) => {
  return (
    <GliteringStarLayout left={left} top={top} delay={delay}>
      <svg width="56" height="87" viewBox="0 0 56 87" fill="none">
        <rect width="56" height="87" fill="url(#pattern00)" />
        <defs>
          <pattern id="pattern00" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_582_30273" transform="scale(0.0178571 0.0114943)" />
          </pattern>
          <image
            id="image0_582_30273"
            width="56"
            height="87"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAABXCAYAAABRJIaRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADdSURBVHgB7dvBCQIxEEDRrFhAOrIFC7EcO7ABzx4Ujx4EwQ6sIB24bAOZw5DDD/9dh4X9EAhLsksZrLX2781rrUsZaFcmZyCdgXQG0hlIZyCdgXQG0hlIZyCdgXQG0hlIZyCdgXTTB+5LUnQ89n79Sub57PGaS5TOQDoD6ebfB6N9KHI8nLrzx+fSnd9v3+48+34uUToD6Qykmz4wfZUx2qeiffL6PHfnfg8GDKQzkM5AuqFX+jf+VjCYgXQG0hlIZyCdgXQG0hlIZyCdgXQG0hlIZyCdgXQG0hlItwInYycNHET0HgAAAABJRU5ErkJggg=="
          />
        </defs>
      </svg>
    </GliteringStarLayout>
  );
};

const GliterAnimation = keyframes`
    0% {
        opacity: 0.9;
        transform: scale3d(0.75, 0.75, 1);
    }
    80% {
        transform: scale3d(0.75, 0.75, 1);
        opacity: 0.6;
    }
    90% {
        transform: scale3d(1, 0.8, 1);        
    }
    100% {
        opacity: 0.9;
        transform: scale3d(0.75, 0.75, 1);
    }
`;

const GliteringStarLayout = styled.div<GliteringStarProps>`
  position: absolute;
  transform: scale(0.6);
  left: ${(props) => props.left + 'px'};
  top: ${(props) => props.top + 'px'};
  & > svg {
    position: absolute;
    left: 0;
    top: 0;
    animation: ${GliterAnimation} 5s infinite ease-in-out ${(props) => props.delay + 'ms'};
    -webkit-animation: ${GliterAnimation} 5s infinite ease-in-out ${(props) => props.delay + 'ms'};
    -moz-animation: ${GliterAnimation} 5s infinite ease-in-out ${(props) => props.delay + 'ms'};
  }
`;

export default GliteringStar;
