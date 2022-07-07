import AppraisalsForm from '@/components/appraisalsForm';
import Cta4 from '@/components/cta4';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import Header from '@/components/Header';

const Apprasials = () => (
  <Main meta={<Meta title='Commercial 1 GC' description='Commercial 1 GC' />}>
    <div className='m-auto max-w-7xl px-6'>
    <Header
      tag=''
      title="What's Your Commercial Property Worth?"
      subtitle='At Commercial 1 we specialise in providing Rental and Sales appraisals for
      Commercial and Industrial properties and are committed to ensuring you are
      provided with the highest level of service.
      <br /> <br />
      Please do not hesitate to contact a member of our team should you have any
      questions or require any further information.'
    />
    <AppraisalsForm />
    <Cta4 />
    </div>
  </Main>
);

export default Apprasials;
