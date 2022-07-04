import AboutComponent from '@/components/about';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main meta={<Meta title="Commercial 1 GC" description="Commercial 1 GC" />}>
    <AboutComponent />
  </Main>
);

export default About;
