import { Container } from '../../Layout/Container/Container.jsx';
import { Category } from "./Category/Category.jsx";
import { Gender } from "./Gender/Gender.jsx";

export const Navigation = ({ list }) => {
  return (
    <nav>
      <Container>
        <Gender list={list} />
        <Category list={list} />
      </Container>
    </nav>
  )
}
