import cn from 'classnames';
import s from './Category.module.scss';
import fs from './../Footer.module.scss';
import { NavLink } from 'react-router-dom';

export const Category = ({list}) => {
  return (
    <div className={s.category}>
      <h2 className={cn(fs.title, s.categoryTitle)}>Каталог</h2>
      <ul className={s.categoryList}>
        {list.map((item) => {
          return (
            <li key={item.link} className={s.categoryItem}>
              <h3 className={s.categorySubtitle}>
                <NavLink className={s.link} to={item.link}>
                  {item.title}
                </NavLink>
              </h3>
              <ul className={s.categorySublist}>
                {item.categories.map((category) => {
                  return (
                    <li key={category.link}>
                      <NavLink className={fs.link} to={`${item.link}/${category.link}`}>
                        {category.title}
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
            </li>
            )
        })}
      </ul>
    </div>
  )
}
