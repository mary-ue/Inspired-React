import s from './Contacts.module.scss';
import fs from './../Footer.module.scss';
import cn from 'classnames';

export const Contacts = () => {
  return (
    <div className={s.contacts}>
      <ul>
        <li className={s.contactsItem}>
          <a className={cn(fs.link, s.contactsLink)} href="mailto:Inspired@gmail.com">Inspired@gmail.com</a>
        </li>
        <li className={s.contactsItem}>
          <a className={cn(fs.link, s.contactsLink)} href="tel:89304902620">8 930 490 26 20</a>
        </li>
      </ul>
    </div>
  )
}
