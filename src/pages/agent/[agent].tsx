import { IProperty } from "@/types";

const Agent = ({ agent }) => {
  return <div>{agent}</div>;
};

export async function getStaticProps({ params }: IParams) {
  return {
    props: {
      agent: params.agent,
    },
    // ISR, will refetch every 15 mins.
    revalidate: 60 * 15,
  };
}

export async function getStaticPaths() {
  const allAgents = [
    {
      name: "ryan",
      id: 1,
    },
    {
      name: "jacob",
      id: 1,
    },
  ];

  const paths = allAgents.map((agent: any) => ({
    params: { agent: `${agent.name}` },
  }));

  return { paths, fallback: false };
}

export default Agent;
