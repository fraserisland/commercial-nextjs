import React from 'react';

import TeamMember from '@/components/teamMember';
import { AGENTS } from '@/constants';

const AboutComponent = () => {
  return (
    <div className="mx-auto max-w-7xl  overflow-hidden bg-whiteLinen py-8 px-4 sm:px-6 lg:px-8">
      

      <div className="bg-white rounded-md shadow-xl border-2 border-gray-100">
        <div className="mx-auto max-w-7xl lg:py-4 px-4 sm:px-6 lg:px-8 ">
          <div className="space-y-8">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl pt-5">
                Our Team
              </h2>
            </div>
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
            >
              {AGENTS.map((agent) => (
                <li key={agent.name}>
                  <TeamMember agent={agent} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
