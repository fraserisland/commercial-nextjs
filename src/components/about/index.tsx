import React from 'react';

const people = [
  {
    name: 'Steve Macgregor ',
    role: 'Managing Director | Sales & Leasing',
    imageUrl: '/assets/images/Steve.jpg',
    mobile: '0410679664',
  },
  {
    name: 'Adam Quinn',
    role: 'Leasing & Sales Executive',
    imageUrl: '/assets/images/Adam.jpg',
    mobile: '0400371989',
  },
  {
    name: 'Ryan Macgregor',
    role: 'Leasing & Sales Executive',
    imageUrl: '/assets/images/Ryan.jpg',
    mobile: '0406226533',
  },
  {
    name: 'Katie Rossi',
    role: 'Sales and Marketing Administrator',
    imageUrl: '/assets/images/Katie.jpg',
  },
];

const AboutComponent = () => {
  return (
    <div className="mx-auto max-w-7xl  overflow-hidden bg-whiteLinen py-8 px-4 sm:px-6 lg:px-8">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl lg:text-7xl">
          About Commercial 1
        </h2>
        <img className="py-5" src="/assets/images/team.jpeg" alt="team photo" />
        <p className="pt-6">
          A family owned and operated independent real estate agency located on
          the Gold Coast focusing on selling and leasing of commercial and
          industrial properties, investments, storage facilities and development
          sites. <br />
          <br />
          We pride ourselves on offering exceptional service, honesty and
          integrity along with the desire to obtain the best possible result for
          our clients. <br />
          <br />
          Contact us today to discuss how we can assist you in achieving an
          extraordinary outcome in your next real estate transaction.
        </p>
      </div>

      <div className="bg-whiteLinen">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Our Team
              </h2>
            </div>
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img
                        className="rounded-lg object-cover shadow-lg"
                        src={person.imageUrl}
                        alt=""
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>{person.name}</h3>
                        <p className="text-orange-600">{person.role}</p>
                      </div>
                      <ul role="list" className="flex space-x-5">
                        {person.mobile ? (
                          <li>
                            {' '}
                            <a href={`tel: ${person.mobile}`}>
                              M. {person.mobile}
                            </a>
                          </li>
                        ) : (
                          <li></li>
                        )}
                      </ul>
                    </div>
                  </div>
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
