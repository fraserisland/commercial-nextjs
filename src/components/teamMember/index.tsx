import Link from 'next/link';

import type { IAgent } from '@/types';

const TeamMember = ({ agent }: { agent: IAgent }) => {
  return (
    <div className="space-y-4">
      <div className="aspect-w-3 aspect-h-2 ">
        <Link href={`/agents/${agent.slug}`}>
          <img
            className="rounded-lg object-cover shadow-xl transition duration-500 hover:scale-105 hover:cursor-pointer border-1 border-gray-100 "
            src={agent.imageUrl}
            alt="agent image"
          />
        </Link>
      </div>

      <div className="space-y-2">
        <div className="space-y-1 text-lg font-medium leading-6 hover:cursor-pointer hover:text-orange-300">
          <Link href={`/agents/${agent.slug}`}>
            <h3>{agent.name}</h3>
          </Link>
          <p className="text-orange-600">{agent.role}</p>
        </div>

        <ul role="list" className="flex space-x-5">
          {agent.mobile ? (
            <li>
              {' '}
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
