import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import TeamMember from '@/components/teamMember';
import { AGENTS } from '@/constants';

const AboutComponent = () => {

  const form2 = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('contact', 'contact_form', form2.current as HTMLFormElement, 'F1azEZxseozcuFQq2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="mx-auto  bg-whiteLinen py-10 ">
      

      <div className="bg-white rounded-md  border-2 border-gray-100 shadow-xl">
        <div className="mx-auto lg:py-4 px-4 sm:px-6 lg:px-8 ">
          <div className="space-y-8 pb-10">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl pt-5">
                Our Team
              </h2>
            </div>
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 xl:grid-cols-3 lg:gap-x-8"
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
      <div>
<form ref={form2} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
    </div>
  );
};

export default AboutComponent;
