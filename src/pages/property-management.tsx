import Cta3 from '@/components/cta3';
import Header from '@/components/Header';
import PropertyManagementForm from '@/components/propertyManagementForm';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const PropertyManagement = () => (
  <Main meta={<Meta title='Commercial 1 GC' description='Commercial 1 GC' />}>
  
    <Header
      tag=''
      title='Your Property – Our Priority!'
      subtitle='At Commercial 1 Property Management we specialise in Commercial and
      Industrial properties and are committed to ensuring you are provided with
      the highest level of service. <br /> <br />Our team is experienced in overseeing
      the leasing of your property through to the management, collection of
      rent, inspections, maintenance, reporting, lease renewals, annual
      increases and tenant vacates. <br /> <br />Please do not hesitate to contact a member
      of our team should you have any questions or require any further
      information.'
    />

    <PropertyManagementForm />
    <Cta3 />
  
  </Main>
);

export default PropertyManagement;
