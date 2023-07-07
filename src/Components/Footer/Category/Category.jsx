import cn from 'classnames';
import s from './Category.module.scss';
import fs from './../Footer.module.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Category = () => {
  const { genderList, categories } = useSelector(state => state.navigation);

  return (
    <div className={s.category}>
      <h2 className={cn(fs.title, s.categoryTitle)}>Каталог</h2>
      <ul className={s.categoryList}>
        {genderList.map((gender) => {
          return (
            <li key={gender} className={s.categoryItem}>
              <h3 className={s.categorySubtitle}>
                <NavLink className={s.link} to={gender}>
                  {categories[gender].title}
                </NavLink>
              </h3>
              <ul className={s.categorySublist}>
                {categories[gender].list.map((category) => {
                  return (
                    <li key={category.slug}>
                      <NavLink className={fs.link} to={`${gender}/${category.slug}`}>
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
