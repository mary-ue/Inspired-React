import s from './Color.module.scss';

export const Color = ({ colorRef, color, isActive, onClick }) => {
  return (
    <li
      ref={colorRef}
      className={`${s.color} ${isActive ? s.colorCheck : ''}`}
      onClick={onClick}
    >
      <div className={s.innerColor} style={{ backgroundColor: color }} />
    </li>
  );
};