import { useSelector } from 'react-redux';
import s from './Color.module.scss';

export const Color = ({ colorRef }) => {
  const { colorList } = useSelector(state => state.color);
  const color = colorList.find(color => color.id === colorRef?.id);

  return (
    <li ref={colorRef} className={s.color}>
      <div
        className={`${s.innerColor} ${colorRef?.id === colorList[0]?.id ? s.colorCheck : ''}`}
        style={{ backgroundColor: color?.code }}
      />
    </li>
  );
};
