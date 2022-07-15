import Cta3 from '@/components/Cta3';
import Header from '@/components/Header';
import PropertyManagementForm from '@/components/PropertyManagementForm';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const title = 'Your Property – Our Priority!'
const desc = 'At Commercial 1 Property Management we specialise in Commercial and Industrial properties and are committed to ensuring you are provided with the highest level of service. <br /> <br />Our team is experienced in overseeing the leasing of your property through to the management, collection of rent, inspections, maintenance, reporting, lease renewals, annual increases and tenant vacates. <br /> <br />Please do not hesitate to contact a member of our team should you have any questions or require any further information.'

const PropertyManagement = () => (
  <Main meta={<Meta title='Property Mangement - Commercial 1 GC' description={desc.substring(0,150)} />}>
  
    <Header
      tag=''
      title={title}
      subtitle={desc}
    />

    <PropertyManagementForm />
    <Cta3 />
  
  </Main>
);

export default PropertyManagement;
