import Cta1 from '@/components/cta1';
import FeaturedProperties from '@/components/FeaturedProperties';

import Blog from '@/components/Blog';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => (
  <Main meta={<Meta title='Commercial 1 GC' description='Commercial 1 GC' />}>
   
      <FeaturedProperties />
      <Cta1 />
      <Blog />
   
  </Main>
);

export default Index;
