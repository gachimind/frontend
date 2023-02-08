import { useState } from 'react';

import { DraggableData } from 'react-draggable';

const useDraggable = () => {
  const [isDragging, setIsdragging] = useState<boolean>(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const trackPosition = (data: DraggableData) => {
    setPosition({ x: data.x, y: data.y });
  };
  const handleDragStart = () => {
    setIsdragging(true);
  };
  const handleDragEnd = () => {
    setIsdragging(false);
  };

  return { isDragging, position, trackPosition, handleDragStart, handleDragEnd };
};

export default useDraggable;
