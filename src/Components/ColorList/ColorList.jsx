import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import s from './ColorList.module.scss';
import { Color } from './Color/Color.jsx';

export const ColorList = ({ colors }) => {
  const { colorList } = useSelector(state => state.color);

  const colorRefs = useRef([]);

  useEffect(() => {
    colors?.forEach((id, index) => {
      const colorRef = colorRefs.current[index];
      const color = colorList.find(color => color.id === id);
      if (color && colorRef) {
        colorRef.style.setProperty('--data-color', color.code);
      }
    });
  }, [colorList, colors]);

  return (
    <ul className={s.colorList}>
      {colors?.map((id, index) => {
        return <Color key={id} colorRef={el => (colorRefs.current[index] = el)} />;
      })}
    </ul>
  );
};

