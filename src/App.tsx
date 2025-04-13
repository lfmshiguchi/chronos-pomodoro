import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import './styels/theme.css';
import './styels/global.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <section>FORM</section>
      </Container>

      <Container>
        <section>FOOTER</section>
      </Container>
    </>
  );
}
