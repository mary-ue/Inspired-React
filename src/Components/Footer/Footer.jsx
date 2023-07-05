import { Container } from '../Layout/Container/Container';
import { Category } from './Category/Category';
import { Contacts } from './Contacts/Contacts';
import { Copyright } from './Copyright/Copyright';
import { Development } from './Development/Development';
import s from './Footer.module.scss';
import { Social } from './Social/Social';
// import cn from 'classnames';

const list = [
  {
    link: 'women',
    title: 'Женщины',
    categories: [
      { link: 'bras', title: 'Бюстгальтеры' },
      { link: 'panties', title: 'Трусы' },
      { link: 'socks', title: ' Носки' },
      { link: 'bathrobes', title: 'Халаты' },
      { link: 'thermal', title: 'Термобелье' },
      { link: 'pijamas', title: 'Пижамы' },
    ],
  },
  {
    link: 'men',
    title: 'Мужчины',
    categories: [
      { link: 'panties', title: 'Трусы' },
      { link: 'socks', title: ' Носки' },
      { link: 'bathrobes', title: 'Халаты' },
      { link: 'thermal', title: 'Термобелье' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div className={s.container}>
          <Category list={list} />
          <Social />
          <Contacts />
          <Copyright />
          <Development />
        </div>
      </Container>
    </footer>
  );
};
