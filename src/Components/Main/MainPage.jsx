import { useParams } from 'react-router-dom';
import { Container } from '../Layout/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategory, fetchGender } from '../../features/goodsSlice';
import s from './MainPage.module.scss';
import { Product } from '../Product/Product';
import { setActiveGender } from '../../features/navigationSlice';

export const MainPage = () => {
  const { gender, category } = useParams();
  const dispatch = useDispatch();
  const { goodsList } = useSelector((state) => state.goods);

  const { activeGender, categories} = useSelector(state => state.navigation);

  useEffect(() => {
    dispatch(setActiveGender(gender));
  }, [gender, dispatch])

  useEffect(() => {
    if(gender && category) {
      dispatch(fetchCategory({ gender, category }));
      return;
    }

    if (gender) {
      dispatch(fetchGender(gender));
      return;
    }
  }, [gender, category, dispatch]);

  return (
    <section>
      <Container>
        <h2 className={s.title}>Новинки</h2>
        <ul className={s.list}>
          {goodsList.map((item) => (
            <li key={item.id}>
              <Product {...item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
