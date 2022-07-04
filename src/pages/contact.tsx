import ContactForm from '@/components/contactForm';
import Cta4 from '@/components/cta4';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Contact = () => (
  <Main meta={<Meta title="Commercial 1 GC" description="Commercial 1 GC" />}>
    <ContactForm />
    <Cta4 />
  </Main>
);

export default Contact;
