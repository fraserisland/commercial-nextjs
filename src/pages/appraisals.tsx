import AppraisalsForm from "@/components/AppraisalsForm";
import Cta4 from "@/components/Cta4";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import Header from "@/components/Header";

const desc =
  "At Commercial 1 we specialise in providing Rental and Sales appraisals for Commercial and Industrial properties and are committed to ensuring you are provided with the highest level of service. <br /> <br /> Please do not hesitate to contact a member of our team should you have any questions or require any further information.";

const title = "What's Your Commercial Property Worth?"

const Apprasials = () => (
  <Main
    meta={
      <Meta
        title={`${title} - Commercial 1 GC`}
        description={desc.substring(0, 100)}
      />
    }
  >
    <Header
      tag=""
      title={title}
      subtitle={desc}
    />
    <AppraisalsForm />
    <Cta4 />
  </Main>
);

export default Apprasials;
