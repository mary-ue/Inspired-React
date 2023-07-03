import { Container } from "../Layout/Container/Container";
import { Category } from "./Category/Category";
import { Contacts } from "./Contacts/Contacts";
import { Copyright } from "./Copyright/Copyright";
import { Development } from "./Development/Development";
import s from './Footer.module.scss';
import { Social } from "./Social/Social";
// import cn from 'classnames';

export const Footer = () => {
  return (
    <Container className={s.container}>
      <Category />
      <Social />
      <Contacts />
      <Copyright />
      <Development />
    </Container>
  )
}