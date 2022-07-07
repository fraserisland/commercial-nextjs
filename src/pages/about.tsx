import AboutComponent from '@/components/about';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import Header from "@/components/Header";


const About = () => (
  <Main meta={<Meta title="Commercial 1 GC" description="Commercial 1 GC" />}>
    <div className='m-auto max-w-7xl px-6'>
    <Header
      tag=""
      title="About Commercial 1"
      subtitle="A family owned and operated independent real estate agency located on
      the Gold Coast focusing on selling and leasing of commercial and
      industrial properties, investments, storage facilities and development
      sites. <br />
      <br />
      We pride ourselves on offering exceptional service, honesty and
      integrity along with the desire to obtain the best possible result for
      our clients. <br />
      <br />
      Contact us today to discuss how we can assist you in achieving an
      extraordinary outcome in your next real estate transaction."
    />
    <AboutComponent />
    </div>
  </Main>
);

export default About;
