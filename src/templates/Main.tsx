import type { ReactNode } from 'react';

import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';

type IMainProps = {
  children: ReactNode;
  meta: ReactNode;
};

const Main = ({ children, meta }: IMainProps) => (
  <>
    {meta}
    <NavBar />
    <div className='m-auto max-w-7xl px-6'>{children}</div>
    <Footer />
  </>
);

export { Main };
