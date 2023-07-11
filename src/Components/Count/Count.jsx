import s from './Count.module.scss';
import cn from 'classnames';

export const Count = ({ className, count, handleIncrement, handleDecrement}) => {
  return(
    <div className={cn(s.count, className)}>
      <button className={s.item} type='button' onClick={handleDecrement}>-</button>
      <span className={cn(s.item, s.number)} type='button'>{count}</span>
      <button className={s.item} type='button' onClick={handleIncrement}>+</button>
    </div>
  )
}