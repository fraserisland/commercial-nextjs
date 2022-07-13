import AppraisalsForm from '@/components/AppraisalsForm';
import Cta4 from '@/components/Cta4';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import Header from '@/components/Header';

const Apprasials = () => (
  <Main meta={<Meta title='Appraisals - Commercial 1 GC' description='At Commercial 1 we specialise in providing Rental and Sales appraisals for
  Commercial and Industrial properties and are committed to ensuring you are
  provided with the highest level of service.
  Please do not hesitate to contact a member of our team should you have any
  questions or require any further information.' />}>
  
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
  
  </Main>
);

export default Apprasials;
