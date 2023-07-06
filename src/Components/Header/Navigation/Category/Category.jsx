import { NavLink, useLocation } from 'react-router-dom';
import s from './Category.module.scss';
import cn from 'classnames';

export const Category = ({ list }) => {
  const location = useLocation().pathname;
  const genderPath = location.split('/');
  const gender = genderPath[1] || 'women';

  console.log('list:', list);
  console.log('location:', location);
  console.log('gender:', gender);

  const genderObj = list.find((item) => item.link === gender);

  return (
    <ul className={s.category}>
      {genderObj?.categories.map((item) => {
        return (
          <li key={item.link}>
            <NavLink className={({isActive}) => cn(s.link, isActive && s.linkActive)} to={`/${gender}/${item.link}`}>
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

