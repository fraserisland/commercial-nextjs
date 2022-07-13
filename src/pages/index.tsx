import Cta1 from '@/components/Cta1';
import FeaturedProperties from '@/components/FeaturedProperties';

import HeaderHomePage from '@/components/HeaderHomePage';
import Blog from '@/components/Blog';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => (
  <Main meta={<Meta title='Commercial 1 GC' description='Commercial 1 GC' />}>
    <div className=''>
      <HeaderHomePage />
     
      <FeaturedProperties />
      
      <Cta1 />
      
      <Blog />
    </div>
   
  </Main>
);

export default Index;
