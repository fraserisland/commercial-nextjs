import React from 'react';

import TeamMember from '@/components/TeamMember';
import { AGENTS } from '@/constants';

const AboutComponent = () => {

 

  return (
    <div className="mx-auto  bg-whiteLinen">
      

      <div className="bg-whiteLinen">
        <div className="mx-auto ">
          <div className="space-y-8 ">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
                Our Team
              </h2>
              <p className="text-lg sm:text-xl text-gray-800">
              Contact one of the members of our team below:
            </p>
            </div>
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 md:grid-cols-3 lg:gap-x-8"
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
      <div className='pt-12'>

    </div>
    </div>
  );
};

export default AboutComponent;
