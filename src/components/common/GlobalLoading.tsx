import React from 'react';
import { createPortal } from 'react-dom';

import styled from 'styled-components';

interface GlobalLoadingProps {
  isLoading: boolean;
  children?: React.ReactNode;
}

// TODO: 디자인 및 필요시 애니메이션 반영 필요
const GlobalLoading = ({ isLoading, children }: GlobalLoadingProps) => {
  const portalDiv = document.querySelector('#loading-root');
  if (!portalDiv) {
    return null;
  }

  return (
    <>
      {isLoading &&
        createPortal(
          <GlobalLoadingLayout>
            {children}
            <div>...isLoading</div>
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
  & > div {
    font-size: 24px;
    color: ${(props) => props.theme.colors.white};
    transform: scale(${(props) => props.theme.layout.scale});
  }
`;

export default GlobalLoading;
