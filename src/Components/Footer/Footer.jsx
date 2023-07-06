import { Container } from '../Layout/Container/Container';
import { Category } from './Category/Category';
import { Contacts } from './Contacts/Contacts';
import { Copyright } from './Copyright/Copyright';
import { Development } from './Development/Development';
import s from './Footer.module.scss';
import { Social } from './Social/Social';
// import cn from 'classnames';

export const Footer = ({list}) => {
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
