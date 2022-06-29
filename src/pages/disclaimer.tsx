import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Disclaimer = () => (
  <Main meta={<Meta title="Commercial 1 GC" description="Commercial 1 GC" />}>
    <div className="m-auto max-w-7xl px-6 pt-6">
      <h2>Disclaimer</h2>
      <br />
      <h1>
        Commercial 1 Gold Coast Pty Ltd, including all of its officers,
        employees and/or consultants (“Us/We”) will from time to time provide
        recipients (“you”) with information in respect of the property or any
        matter related to the property (“Information”). We make no
        representation or guarantee as to the completeness or accuracy of the
        Information. You should satisfy yourself as to the accuracy and
        completeness of the Information. The Information should not be relied
        upon by you and you should make your own enquiries as to the accuracy
        and completeness of the Information, including obtaining your own legal
        advice in respect of the Information and the property. We do not accept
        any liability (direct or indirect) for any injury, loss, claim, damage
        or any incidental or consequential damages, including but not limited
        to, lost profits or savings, arising out of, or in any way connected
        with, the use of any Information, or any error, omission or defect in
        the Information.
      </h1>
    </div>
  </Main>
);

export default Disclaimer;
