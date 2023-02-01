import React from 'react';
import { useCallback } from 'react';

import styled, { css, FlattenSimpleInterpolation, keyframes } from 'styled-components';

/**
 * transitionX: vw
 * duration: 밀리세컨드
 */
export interface LoadingCatProps {
  transitionX: number;
  duration: number;
}

const LoadingCat = ({ transitionX = -200, duration = 1000 }: LoadingCatProps) => {
  const catTranslateXAnimation = useCallback(() => {
    const animation = keyframes`
            0% {
              transform: translateX(
                  0
              );
            }
            100% {
                transform: translateX(${transitionX + 'vw'});
            }
          `;
    return css`
      animation: ${animation};
      animation-duration: ${duration}ms;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
    `;
  }, [transitionX, duration]);

  return (
    <LoadingCatLayout animation={catTranslateXAnimation}>
      <svg width="166" height="127" viewBox="0 0 166 127" fill="none">
        <rect x="9" y="99" width="154" height="28" fill="url(#pattern0)" />
        <CatTail>
          <rect x="123" y="67" width="16" height="13.92" fill="white" stroke="white" strokeWidth={0.6} />
          <rect x="131.957" y="52.8696" width="13.913" height="13.913" fill="white" stroke="white" strokeWidth={0.6} />
          <rect x="139" y="39" width="13.913" height="13.913" fill="#CECCDA" stroke="#CECCDA" strokeWidth={0.6} />
          <rect x="132" y="39" width="6.95652" height="13.92" fill="black" />
          <rect x="125" y="53" width="6.95652" height="13.92" fill="black" />
          <rect x="146" y="53" width="6.95652" height="13.92" fill="black" />
          <rect x="139" y="67" width="6.95652" height="13.92" fill="black" />
          <rect x="159" y="39" width="6.95652" height="13.92" fill="black" />
          <rect x="139" y="32" width="20.94" height="6.98" fill="black" />
          <rect x="152.826" y="45.9126" width="6.95652" height="6.95652" fill="black" />
          <rect
            x="152.826"
            y="38.9556"
            width="6.95652"
            height="6.95652"
            fill="#CECCDA"
            stroke="#CECCDA"
            strokeWidth={0.6}
          />
        </CatTail>
        <path d="M147 0H0V103H147V0Z" fill="url(#pattern1)" />
        <rect x="15" y="99" width="132" height="28" fill="url(#pattern2)" />
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_580_30249" transform="scale(0.00649351 0.0357143)" />
          </pattern>
          <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image1_580_30249" transform="scale(0.00680272 0.00970874)" />
          </pattern>
          <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image2_580_30249" transform="scale(0.00757576 0.0357143)" />
          </pattern>
          <CatLeg>
            <image
              id="image0_580_30249"
              width="145"
              height="27"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAAAcCAYAAACZFqbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIpSURBVHgB7dq9bhNBFAXgE5QGKY4saLBJsRTwHBtaYgpqkE2B8wp0hI63YJ8AIX5q04JwRVx7FiW2KILspIgytllmCR0zG2Yye6VI55NGlnI10h37KNZc7xqqFbY/JkmC8XgMX1ovMPqm4Ovr8DP6u0+stTRNMRgMENPR0TG+qx/wdat1A632TcSUmz5+mn5iuntvCxuN69Za+dnmeY4AiVnOjddAJIBBIxEMGolg0EgEg0YiGDQSsQ7HCKNUFAV8VY0wJtND7HS24ascYYT0UjWmeP/hDV7sPYeULMvQ7XYR07PdxxgOv8BXOQ4q31MbpZRz32hfQZ8trLUHnW01NZ+vwxr/o5EIBo1EMGgkgkEjEQwaiVivKuqzJXxpvcRkcmCtTc5vJcqxtfl3/WO5XAX1Mp/Nnb0sFnpmXmYQorVumhud9XyNxiYaG5vWfavVLwRSroL50Txx3S7brS3UoTJoo33/JzT+jDAe3neVlVl3HLXULOtjGKenOqiXC0YYb816CiH9fj8zL9b5xsu9V+jsPEJk5dk+2Qq9Xq98n1Nb7eO7AVrt24iNX50kgkEjEQwaiWDQSASDRiIqb52u0UDlnuoRhkKAk5PjoF4uGGHMIavsQ9kKps+mOV8TcnJXL4fTg6SA/wMM/6OIvPznEOfSGnp5jashQ/yzpwgzrqEXfnWSDAaNRDBoJIJBIxEMGokoxxsKcSmEcV7/L0F6hBGqjrOHUqjBb6z8E3qBNyLBAAAAAElFTkSuQmCC"
            />
            <image
              className="cat-leg2"
              id="image2_580_30249"
              width="132"
              height="27"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAAAcCAYAAACgcReJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADwSURBVHgB7dmxasMwGEXh29K5S4ZutR+teTLrhUqHQpcOtjo1QxLIFiegOFsuQYZoSGw4H2j6wdjyQWD8JCkpo21b1XWtuYjdSpv1TlPyXr9psXjVVJzfZ4wxN14+C7hAEDAEAUMQMAQBQxC4knJr+OxMpZqmyV53+PRJpaqqSmP3PLUVQkglHrR/H5wQMAQBQxAwBAFDEDAEAfMyNvz57rRdH1TiL66ys35/0Nfnr0r0/XFsvBxW0H2lsWHs/oue9UH7xwkBRxAwBAFDEDAEAUMQuEmr6f1BrDQvQTPaP04IGIKAIQgYgoAhCBiCgDkBOUaphrH6iz8AAAAASUVORK5CYII="
            />
          </CatLeg>
          <image
            id="image1_580_30249"
            width="147"
            height="102"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJMAAABnCAYAAAAE5nAaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASDSURBVHgB7d3PaxxlHMfx7ybdbH7q2lRjsJIRFIS2AX+lFBR6EHvNJRd7SS7xJEmwUkEx619gcvK4C2IpBCRBbzkkF+lJ9GCI1ENWKFaRNJs2P0yaWHeSHud5gtPPJDu77xcMPTw7ZWfm3Q6zO/uMWXyl6vIoxlK0xrFi8fZRKvdTkwEixAQZYoIMMUGGmCBDTJA5ZQkYHx+3sbGxyLH5+fnB0dHRy0f8FS9Zeqy4BhYWFoKqyLGJiQmbnZ21epJITPl83lw7MZvN5sOXWP0InAPVfeDaD+E+qjec5iBDTJAhJsgQE2SICTKJXM1V1jbs9/JfkWP9F163YtH/hfjIyEhqvjH3bcvGg4fO/fDg/pbVm0Ri2t7esXur9yPHurt7bHh42Lt+NSb/C2qIb1uWfik798Pu7p7VG05zkCEmyBATZIgJMsQEmUSu5nzCK727f6x6X1MoFCwtfNuyv7dvjeT4Y9raOVh8JicnLS1++vE3wyFOc5AhJsgQE2SICTLEBJmjruYGzXG/9tDQUF9HR0fkSpcuDdjp7qesEcTdzveuvGvdZ9zrbm5uBjMzM8OO4Up1Sd2vEZwTL5RKpUdITrFY9E1qsWI1iNMcZIgJMsQEGWKCDDFBhpggQ0yQISbIEBNkiAkyxAQZYoIMMUGGmCAT3s/ku50hsBimp6dtamrK4lpZOd47LObm5g4mdY3juN/rY4H5j9uJTDAbxhSYWKVSsXK5bGmxtraWqvf7WGA1htMcZIgJMsQEGWKCDDFBJryaG/GMf2kxHk3RcuEd67r6WeTYfkub7XXU1s+g3n65xb66Gv2eMtUll81YjQl/6jRhNSaMqeQZD6cj+d8xnXrhFWsdaIsc22uvHrRneqyW9HU32/uO99tU7agzV5MxlazGcJqDDDFBhpggQ0yQISbIhFdzBc+480quUtlwTg7a/3TWPr54NnLs32yr7bW2Wy1pOnPOchevRY5lwgu5ZpNbr2za1tY/nvEN3+rhcSl4xn1jiQljijUbabixf969FznW33varrz6vKVF87PnD5bjFP5jdD1XJbS+vulbPYzJd9wKdgI4zUGGmCBDTJAhJsgQE2SO+qLXafnXpcvmuA95YOAty+XejFyvJZe1zs7oL1XrTXj5v78f/fyUW7d+sNu33Y/KWF5eKlf/WLR4hj1j4cSqFUvAUbegON28+XXJHDF9MPqh9Tz3YuR64ey0jRLTnTt/2+7Ow8ixGze+se++/9a3+qLFPDZ2OImqy4IlFBOnOcgQE2SICTLEBBligsyxPwkTh7q6uqy396xzfHd3O7+6uhpYihDTCbn20acHi0v1Y4PBycIng5YinOYgQ0yQISbIEBNkiAkyxAQZPhpI0LnzgcX12hvX7fPJ65aAssXzRSaT8f2IIeB/JsgQE2SICTLEBBliggwxQYaYIENMkCEmyBATZIgJMsQEGWKCTCJ3DeTzHdYXRD+FoCXHjQr1KpEj29beejBBBRoLpznIEBNkiAkyxAQZYoIMMUHmST4aWDT/3ImoLz/b4VNmnf4DrHZrhw+R/fQAAAAASUVORK5CYII="
          />
        </defs>
      </svg>
    </LoadingCatLayout>
  );
};

const CatTailAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(2deg) translateY(1%) translateX(5%);
  }
`;

const CatWorkAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const LoadingCatLayout = styled.div<{ animation: () => FlattenSimpleInterpolation }>`
  position: relative;
  width: 100%;
  z-index: 2;
  transform: scale(0.7);
  & > svg {
    position: absolute;
    right: 0;
    top: 0;
    ${(props) => props.animation()};
  }
`;

const CatTail = styled.g`
  -moz-animation: ${CatTailAnimation} 0.06s infinite alternate linear;
  -webkit-animation: ${CatTailAnimation} 0.06s infinite alternate linear;
  animation: ${CatTailAnimation} 0.06s infinite alternate linear;
`;

const CatLeg = styled.g`
  & > image:first-child {
    -moz-animation: ${CatWorkAnimation} 0.2s infinite steps(1);
    -webkit-animation: ${CatWorkAnimation} 0.2s infinite steps(1);
    animation: ${CatWorkAnimation} 0.2s infinite steps(1);
  }
  & > image:nth-child(2) {
    -moz-animation: ${CatWorkAnimation} 0.2s infinite steps(1) -0.1s;
    -webkit-animation: ${CatWorkAnimation} 0.2s infinite steps(1) -0.1s;
    animation: ${CatWorkAnimation} 0.2s infinite steps(1) -0.1s;
  }
`;

export default React.memo(LoadingCat);
