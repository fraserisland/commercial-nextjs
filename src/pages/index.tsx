import Cta1 from '@/components/Cta1';
import FeaturedProperties from '@/components/FeaturedProperties';

import HeaderHomePage from '@/components/HeaderHomePage';
import Blog from '@/components/Blog';
import Divider from '@/components/Divider';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => (
  <Main meta={<Meta title='Commercial 1 GC' description='Commercial 1 GC' />}>
    <div className=''>
      <HeaderHomePage />
      <Divider />
      <FeaturedProperties />
      <Divider />
      <Cta1 />
      <Divider />
      <Blog />
    </div>
  </Main>
);

export default Index;
