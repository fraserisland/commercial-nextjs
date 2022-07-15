import Cta1 from "@/components/Cta1";
import FeaturedProperties from "@/components/FeaturedProperties";

import HeaderHomePage from "@/components/HeaderHomePage";
import Blog from "@/components/Blog";
// import Divider from "@/components/Divider";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";

import React from "react";

const Index = () => (
  <Main meta={<Meta title="Commercial 1 GC" image="assets/images/team.jpeg" />}>
    <HeaderHomePage />
    {/* <Divider /> */}
    <FeaturedProperties />
    {/* <Divider /> */}
    <Cta1 />
    {/* <Divider /> */}
    <Blog />
  </Main>
);
export default Index;
