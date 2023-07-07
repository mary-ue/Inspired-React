import { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import s from './ColorList.module.scss';
import { Color } from './Color/Color.jsx';

export const ColorList = ({ colors }) => {
  const { colorList } = useSelector(state => state.color);

  const colorRefs = useRef([]);

  const [activeColorIndex, setActiveColorIndex] = useState(0);

  useEffect(() => {
    colors?.forEach((id, index) => {
      const colorRef = colorRefs.current[index];
      const color = colorList.find(color => color.id === id);
      if (color && colorRef) {
        colorRef.style.setProperty('--data-color', color.code);
      }
    });
  }, [colorList, colors]);

  const handleColorClick = (index) => {
    setActiveColorIndex(index);
  };

  return (
    <ul className={s.colorList}>
      {colors?.map((id, index) => {
        const colorRef = el => (colorRefs.current[index] = el);
        const color = colorList.find(color => color.id === id);
        const isActive = index === activeColorIndex;
        return (
          <Color
            key={id}
            colorRef={colorRef}
            color={color?.code}
            isActive={isActive}
            onClick={() => handleColorClick(index)}
          />
        );
      })}
    </ul>
  );
};