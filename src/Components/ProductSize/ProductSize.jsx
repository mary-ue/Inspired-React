import s from './ProductSize.module.scss';

export const ProductSize = ({ size }) => {
  return (
    <div className={s.size}>
      <p className={s.title}>Размер</p>
      <ul className={s.list}>
        {size?.map((item, i) => {
          return (<li key={i} className={s.item}>
            <input className={s.input} id={item} type="radio" name="size" value={item}  />
            <label className={s.check} htmlFor={item}>{item}</label>
          </li>)
        })
        }
      </ul>
    </div>
  )
}