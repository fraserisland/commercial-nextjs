import Cta3 from '@/components/cta3';
import PropertyManagementForm from '@/components/propertyManagementForm';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const PropertyManagement = () => (
  <Main meta={<Meta title="Commercial 1 GC" description="Commercial 1 GC" />}>
    <PropertyManagementForm />
    <Cta3 />
  </Main>
);

export default PropertyManagement;
