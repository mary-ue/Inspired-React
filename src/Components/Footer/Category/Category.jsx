import cn from 'classnames';
import s from './Category.module.scss';
import fs from './../Footer.module.scss';

export const Category = () => {
  return (
    <div className={s.category}>
      <h2 className={cn(fs.title, s.categoryTitle)}>Каталог</h2>
      <ul className={s.categoryList}>
        <li className={s.categoryItem}>
          <h3 className={s.categorySubtitle}>
            Женщины
          </h3>
          <ul className={s.categorySublist}>
            <li>
              <a className={fs.link} href="#">Бюстгальтеры</a>
            </li>
            <li>
              <a className={fs.link} href="#">Трусы</a>
            </li>
            <li>
              <a className={fs.link} href="#">Носки</a>
            </li>
            <li>
              <a className={fs.link} href="#">Халаты</a>
            </li>
            <li>
              <a className={fs.link} href="#">Термобелье</a>
            </li>
            <li>
              <a className={fs.link} href="#">Пижамы</a>
            </li>
          </ul>
        </li>
        <li className={s.categoryItem}>
          <h3 className={s.categorySubtitle}>
            Мужчины
          </h3>
          <ul className={s.categorySublist}>
            <li>
              <a className={fs.link} href="#">Трусы</a>
            </li>
            <li>
              <a className={fs.link} href="#">Носки</a>
            </li>
            <li>
              <a className={fs.link} href="#">Халаты</a>
            </li>
            <li>
              <a className={fs.link} href="#">Термобелье</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
