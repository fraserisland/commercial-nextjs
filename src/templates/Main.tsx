import type { ReactNode } from 'react';

import NavBar from '@/components/navbar';

type IMainProps = {
  children: ReactNode;
  meta: ReactNode;
};

const Main = ({ children, meta }: IMainProps) => (
  <>
    {meta}
    <NavBar />
    <div>{children}</div>
    <footer>footer yo</footer>
  </>
);

export { Main };
