import styled from 'styled-components';

import SlideLeftIcon from '@assets/slideLeftIcon.svg';
import SlideRightIcon from '@assets/slideRightIcon.svg';
interface SliderNextArrowProps {
  direction: 'left' | 'right';
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const CamListSliderArrow = ({ onClick, direction }: SliderNextArrowProps) => {
  return (
    <SliderNextArrowLayout className="slick-disabled" direction={direction} onClick={onClick}>
      <SliderIconBox>
        <img src={direction === 'left' ? SlideLeftIcon : SlideRightIcon} />
      </SliderIconBox>
    </SliderNextArrowLayout>
  );
};

const SliderNextArrowLayout = styled.div<{ direction: 'left' | 'right' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: ${(props) => (props.direction === 'left' ? '0 0 0 -60px' : '0 -60px 0 0')};
  top: 0;
  right: ${(props) => props.direction === 'right' && 0};
  left: ${(props) => props.direction === 'left' && 0};
  width: 40px;
  height: 100%;
`;

const SliderIconBox = styled.div`
  height: 40px;
  padding: 8px 12px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.button};
  cursor: pointer;
  :hover {
    opacity: 0.85;
  }
`;

export default CamListSliderArrow;
