import Cta1 from '@/components/Cta1';
import FeaturedProperties from '@/components/FeaturedProperties';

import HeaderHomePage from '@/components/HeaderHomePage';
import Blog from '@/components/Blog';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import React from "react";

const Index = () => (
  <Main meta={<Meta title='Commercial 1 GC' image='assets/images/team.jpeg' />}>
    
      <HeaderHomePage />
     
      <FeaturedProperties />
      
      <Cta1 />
      
      <Blog />
   
  </Main>
)
;

export default Index;
