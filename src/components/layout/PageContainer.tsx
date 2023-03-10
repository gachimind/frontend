import React from 'react';

import styled from 'styled-components';

import { useBackgroundSound } from '@hooks/useBackgroundSound';

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  useBackgroundSound();
  return (
    <ContainerLayout>
      <ContainerInnerBox>{children}</ContainerInnerBox>
    </ContainerLayout>
  );
};

export const ContainerLayout = styled.div`
  background-color: ${(props) => props.theme.colors.darkGrey2};
  width: ${(props) => props.theme.layout.maxWidth};
  height: ${(props) => props.theme.layout.maxHeight};
  transform: scale(${(props) => props.theme.layout.scale});
  padding-top: 76px;
  padding-bottom: 76px;
  padding-left: 80px;
  padding-right: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ContainerInnerBox = styled.div`
  width: 1760px;
  height: 928px;
  border: ${(props) => props.theme.borders.thick1};
  box-shadow: ${(props) => props.theme.boxShadows.boxShadow1};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default PageContainer;
