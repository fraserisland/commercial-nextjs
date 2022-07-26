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
    <div className='m-auto max-w-7xl md:px-6 px-2'>{children}</div>
    <Footer />
  </>
);

export { Main };
