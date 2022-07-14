import Link from "next/link";
import Image from "next/image";

import type { IAgent } from "@/types";

const TeamMember = ({ agent }: { agent: IAgent }) => {
  return (
    <div className="space-y-4 border-gray-300 border-[1px] rounded-md transition duration-500 hover:scale-105 hover:cursor-pointer shadow-xl bg-white h-full">
      <div className="aspect-w-4 aspect-h-4 overflow-hidden relative">
        <Link href={`/agents/${agent.slug}`}>
          <Image
            src={agent.imageUrl}
            alt="agent image"
            layout="fill"
            height="100%"
            width="100%"
            objectFit="cover"
          />
        </Link>
      </div>

      <div className="space-y-4 px-4 pb-3 h-full">
        <div className="space-y-5 text-lg font-medium leading-6 hover:cursor-pointer text-orange-600  ">
          <Link href={`/agents/${agent.slug}`}>
            <h3 className="text-blueCharcoal-500 ">{agent.name}</h3>
          </Link>
          <p className="">{agent.role}</p>
        </div>

        <ul role="list" className="flex space-x-5">
          {agent.mobile ? (
            <li>
              {" "}
              <a href={`tel: ${agent.mobile}`}>M. {agent.mobile}</a>
            </li>
          ) : (
            <li></li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default TeamMember;
