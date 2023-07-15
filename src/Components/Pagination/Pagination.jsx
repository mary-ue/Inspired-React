import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import s from './Paginataion.module.scss';
import cn from "classnames";
import { ReactComponent as ArrowLeft } from '../../assets/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../assets/ArrowRight.svg';
import { useEffect, useState } from "react";

export const Pagination = () => {
  const [pagePagination, setPagePagination] = useState('');
  const pathname = useLocation().pathname;
  const { page, pages } = useSelector(state => state.goods);

  useEffect(() => {
    setPagePagination(page);
  }, [page, setPagePagination])

  const handlePageChange = (newPage => {
    setPagePagination(newPage);
  })

  const handlePrevPage = () => {
    if (pagePagination> 1) {
      handlePageChange(pagePagination - 1);
    }
  }

  const handleNextPage = () => {
    if (pagePagination < pages) {
      handlePageChange(pagePagination + 1);
    }
  }

  const renderPaginationItems = () => {
    const paginationItems = [];

    let startPage = (pagePagination === pages) && (pages >= 3) ? pagePagination - 2 : Math.max(1, pagePagination - 1);
    let endPage = Math.min(startPage + 2, pages);

    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <li className={s.item} key={i}>
          <NavLink className={cn(s.link, i === pagePagination ?? s.linkActive)} to={`${pathname}?page=${i}`} onClick={() => handlePageChange(i)}>
            {i}
          </NavLink>
        </li>
      )
    }

    return paginationItems;
  }

  return (
    pages > 1 &&
    <div className={s.pagination}>
      <button className={s.arrow} onClick={handlePrevPage} disabled={pagePagination <= 2}>
        <ArrowLeft />
      </button>
      <ul className={s.list}>
        {renderPaginationItems()}
      </ul>
      <button className={s.arrow} onClick={handleNextPage} disabled={pagePagination >= pages - 1 || pages <= 3}>
        <ArrowRight />
      </button>
    </div>
  )
}