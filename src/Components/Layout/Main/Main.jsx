import s from './Main.module.scss';

export const Main = ({ children }) => {
  return (
    <div className={s.main}>{children}</div>
  )
}