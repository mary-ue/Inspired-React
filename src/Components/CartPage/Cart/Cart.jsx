import { useSelector } from 'react-redux';
import s from './Cart.module.scss';
import { Container } from '../../Layout/Container/Container';
import { CartItem } from './CartItem/CartItem';

export const Cart = ({ cartItems, goodsList }) => {
  const totalPrice = 0;


  return (
    <section className={s.cart}>
      <Container>
        <h2 className={s.title}>Корзина</h2>
        {goodsList.length? 
          <ul className={s.list}>
            {cartItems.map(item => {
              return (
                <li className={s.item} key={`${item.id}-${item.color}-${item.size}`}>
                  <CartItem {...item} goodsList={goodsList} />
                </li>
              )
            })}
          </ul>
          :
          <h3>В корзине пусто</h3>
        }
        <div className={s.total}>
          <p>Итого:</p>
          <p>руб {totalPrice}</p>
        </div>
      </Container>
    </section>
  )
}