import { useRef } from 'react';
import s from './Color.module.scss';

export const Color = ({color, check}) => {
  const colorRef = useRef(null);

  return (
    <li ref={colorRef}>
      {color}
    </li>
  )
}