import type { ReactNode } from "react";

import Footer from "@/components/footer";
import NavBar from "@/components/navbar";

type IMainProps = {
  children: ReactNode;
  meta: ReactNode;
};

const Main = ({ children, meta }: IMainProps) => (
  <>
    {meta}
    <NavBar />
    <div>{children}</div>
    <Footer />
  </>
);

export { Main };
