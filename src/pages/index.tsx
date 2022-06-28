import Cta1 from '@/components/cta1';
import Cta2 from '@/components/cta2';
import Cta3 from '@/components/cta3';
import Cta4 from '@/components/cta4';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => (
  <Main meta={<Meta title="Commercial 1 GC" description="Commercial 1 GC" />}>
    <div className="m-auto max-w-7xl px-6">
      <h1>Home!</h1>
      <Cta1 />
      <Cta2 />
      <Cta3 />
      <Cta4 />
    </div>
  </Main>
);

export default Index;
