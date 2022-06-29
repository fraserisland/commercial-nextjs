import AppraisalsForm from '@/components/appraisalsForm';
import Cta4 from '@/components/cta4';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Apprasials = () => (
  <Main meta={<Meta title="Commercial 1 GC" description="Commercial 1 GC" />}>
    <AppraisalsForm />
    <Cta4 />
  </Main>
);

export default Apprasials;
