// import s from './FavoritePage.module.scss';
import { useDispatch, useSelector } from "react-redux"
import { Goods } from "../Goods/Goods"
import { useEffect } from "react";
import { fetchCategory } from "../../features/goodsSlice";
import { usePageFromSearchParams } from "../../hooks/usePageFromSearchParams";
import s from './FavoritePage.module.scss';

export const FavoritePage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const page = usePageFromSearchParams(dispatch);

  useEffect(() => {
    if (favorites) {
      const param = { list: favorites };
      if (page) {
        param.page = page;
      }
      dispatch(fetchCategory(param));
    }
  }, [favorites, page, dispatch]);

  return (
    favorites.length ? 
    <Goods title="Избранное" /> :
    <h3 className={s.empty}>Вы еще не добавили ни одного товара в избранное</h3>
  )
}