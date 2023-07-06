import { Navigation } from './Navigation/Navigation';
import { Top } from './Top/Top';

export const Header = ({ list }) => {
  return (
    <header>
      <Top />
      <Navigation list={list} />
    </header>
  );
};
