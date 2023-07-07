import { NavLink } from 'react-router-dom';
import s from './Category.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';

export const Category = ({ list }) => {
  const gender = useSelector(state => state.navigation.activeGender);
  const categoriesList = list.find((item) => item.link === gender);

  return (
    <ul className={s.category}>
      {categoriesList?.categories.map((item) => {
        return (
          <li className={s.item} key={item.link}>
            <NavLink className={({isActive}) => cn(s.link, isActive && s.linkActive)} to={`${gender}/${item.link}`}>
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

