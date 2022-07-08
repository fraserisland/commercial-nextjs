import ContactForm from '@/components/contactForm';
import Cta4 from '@/components/cta4';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import Header from '@/components/Header';

const Contact = () => (
  <Main meta={<Meta title='Commercial 1 GC' description='Commercial 1 GC' />}>
    
    <Header
      tag=''
      title='Would you like to contact us?'
      subtitle='At Commercial 1 we specialise in providing sales, leasing and property management for
      Commercial and Industrial properties and are committed to ensuring you are
      provided with the highest level of service.
      <br /> <br />
      Please do not hesitate to contact a member of our team using the form below should you have any
      questions or require any further information.'
    />
    <ContactForm />
    <Cta4 />
   
  </Main>
);

export default Contact;
