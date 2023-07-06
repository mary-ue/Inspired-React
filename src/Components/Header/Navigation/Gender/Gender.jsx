import { NavLink } from 'react-router-dom';
import s from './Gender.module.scss';
import cn from 'classnames';

export const Gender = ({ list }) => {
  return (
    <ul className={s.gender}>
      {list.map((item) => {
        return (
          <li key={item.link} className={s.item}>
            <NavLink className={({isActive}) => cn(s.link, isActive && s.linkActive)} to={item.link}>
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
