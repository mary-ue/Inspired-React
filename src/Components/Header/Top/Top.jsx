import { Container } from "../../Layout/Container/Container";
import cn from 'classnames';
import s from './Top.module.scss';
import logo from '/src/assets/logo.svg';
import { NavLink } from "react-router-dom";
import { ReactComponent as LikeSVG } from '../../../assets/heart.svg';
import { ReactComponent as SearchSVG } from '../../../assets/search.svg';
import { ReactComponent as CartSVG } from '../../../assets/cart.svg';
import { useSelector } from "react-redux";

export const Top = () => {
  const { countItems } = useSelector(state => state.cart);

  return (
    <div className={s.top}>
      <Container className={s.topContainer}>
        <a className={cn(s.topLink, s.topPhone)} href="tel:89304902620">8 930 490 26 20</a>
        <NavLink className={s.topLogo} to="/">
          <img src={logo} alt="Логотип inspired"/>
        </NavLink>
        <div className={s.topNavigation}>
          <ul className={s.topNavList}>
            <li className={s.topNavItem}>
              <button className={s.topLink}>
                <SearchSVG />
              </button>
            </li>
            <li className={s.topNavItem}>
              <NavLink className={s.topLink} to='/cart'>
                <CartSVG />
                <span className={s.topLinkCount}>{countItems}</span>
              </NavLink>
            </li>
            <li className={s.topNavItem}>
              <NavLink className={cn(s.topLink, s.like)} to='/favorite'>
                <LikeSVG />
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}
