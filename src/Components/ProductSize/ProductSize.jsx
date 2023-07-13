import s from './ProductSize.module.scss';

export const ProductSize = ({ size, selectedSize, handleSizeChange }) => {
  return (
    <div className={s.size}>
      <p className={s.title}>Размер</p>
      <ul className={s.list}>
        {size?.map((item) => {
          return (<li key={item} className={s.item}>
            <input className={s.input} id={item} type="radio" name="size" value={item} checked={selectedSize === item} onChange={handleSizeChange} />
            <label className={s.check} htmlFor={item}>{item}</label>
          </li>)
        })
        }
      </ul>
    </div>
  )
}