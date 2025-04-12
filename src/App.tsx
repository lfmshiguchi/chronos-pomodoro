import { Heading } from './components/Heading';

import './styels/theme.css';
import './styels/global.css';

export function App() {
  return (
    <>
      <Heading attr={123} attr2='String'>
        1 2 3
      </Heading>
      <p>teste</p>
    </>
  );
}
