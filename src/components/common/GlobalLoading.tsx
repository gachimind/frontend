import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import styled, { keyframes } from 'styled-components';

import Cat from '@components/character/Cat';
import LoadingCat from '@components/character/LoadingCat';

import GlobalLoadingBackground from './GlobalLoadingBackground';
import TitleText from './TitleText';

export interface GlobalLoadingProps {
  isLoading: boolean;
}

// TODO: 디자인 및 필요시 애니메이션 반영 필요
const GlobalLoading = ({ isLoading }: GlobalLoadingProps) => {
  const portalDiv = document.querySelector('#loading-root');
  const [isRocketCat, setIsRocketCat] = useState<boolean>(false);
  const [isCatWorking, setIsCatWorking] = useState<boolean>(true);

  useEffect(() => {
    if (!isLoading) {
      setIsCatWorking(true);
      setIsRocketCat(false);
      return;
    }
    const timeoutId = setTimeout(() => {
      setIsCatWorking(false);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isLoading]);

  useEffect(() => {
    if (isCatWorking) {
      return;
    }
    const timeoutId = setTimeout(() => {
      setIsRocketCat(true);
    }, 140);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isCatWorking]);

  if (!portalDiv) {
    return null;
  }

  return (
    <>
      {isLoading &&
        createPortal(
          <GlobalLoadingLayout>
            <GlobalLoadingBackground />
            <ContentBox>
              <TitleText />
              <CatBox>
                <div style={{ opacity: isCatWorking ? '0' : '1' }}>
                  <Cat
                    catTheme="white"
                    rocketTheme="red"
                    type={isRocketCat ? 'rocket' : 'body'}
                    hasIdlePopupAnimation={true}
                    scale={1.5}
                    letsMove={{ millSecond: 360000 }}
                  />
                </div>
              </CatBox>
              <RunningCatBox>
                <div style={{ opacity: isCatWorking ? '1' : '0' }}>
                  <LoadingCat transitionX={-32.3} duration={1000} />
                </div>
              </RunningCatBox>
            </ContentBox>
          </GlobalLoadingLayout>,
          portalDiv,
        )}
    </>
  );
};

const GlobalLoadingLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  position: absolute;
  top: 0;
  background-color: ${(props) => props.theme.colors.darkGrey2};
  width: 100%;
  height: 100%;
  z-index: 1000;
  overflow: hidden;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 600px;
  background-color: rgba(255, 255, 255, 0);
  color: ${(props) => props.theme.colors.white};
  transform: scale(${(props) => props.theme.layout.scale});
`;

const CatMoveAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-160px) scale(1.2);
  }
  100% {
    transform: translateY(0);
  }
`;

const CatBox = styled.div`
  padding-top: 220px;
  height: 150px;
  animation: ${CatMoveAnimation} 3s ease infinite 1s;
  -webkit-animation: ${CatMoveAnimation} 3s ease infinite 1s;
  -moz-animation: ${CatMoveAnimation} 3s ease infinite 1s;
`;
const RunningCatBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100px;
  width: 90%;
`;

export default GlobalLoading;
