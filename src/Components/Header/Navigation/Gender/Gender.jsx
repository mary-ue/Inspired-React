import { NavLink } from 'react-router-dom';
import s from './Gender.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';

export const Gender = ({ list }) => {
  const gender = useSelector(state => state.navigation.activeGender);

  return (
    <ul className={s.gender}>
      {list.map((item) => {
        return (
          <li key={item.link} className={s.item}>
            <NavLink className={({isActive}) => cn(s.link, (isActive || gender === item.link) && s.linkActive)} to={item.link}>
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
