import s from './Development.module.scss';

export const Development = () => {
  return (
    <div className={s.development}>
      <ul className={s.developmentList}>
        <li className={s.developmentItem}>
          Designer: <a href="https://t.me/Mrshmallowww" target="_blank">Anastasia Ilina</a>
        </li>
        <li className={s.developmentItem}>
          Developer: <a href="https://t.me/Mary_ue" target="_blank">Mary Solovyeva</a>
        </li>
      </ul>
    </div>
  )
}
