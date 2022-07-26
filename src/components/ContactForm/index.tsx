import React from "react";

import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import BasicForm from "../BasicForm";

const ContactForm = () => {
  return (
    <>
      <div className="relative bg-white max-w-7xl m-auto shadow-2xl rounded-lg border-2 border-gray-100 mt-8">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-white rounded-md" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="bg-white-50 py-10 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-16 xl:pr-12">
            <div className="mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                Contact Our Team
              </h2>
              <p className="mt-3 text-lg leading-6 text-blueCharcoal-500">
                Commercial 1 Gold Coast
              </p>
              <dl className="mt-8 text-base text-gray-600">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <p>PO BOX 777</p>
                    <p>Ashmore City</p>
                    <p>QLD 4214</p>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <PhoneIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">0410 679 664</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <MailIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">admin@commercial1.com</span>
                  </dd>
                </div>
              </dl>
              <p className="mt-6 text-base text-orange-400">
                Have you considered a change or are you looking for a start in
                the Commercial Real Estate industry? Call us for a confidential
                conversation.
              </p>
            </div>
          </div>
          <div className="bg-white py-6 px-4 sm:px-6 sm:m-2 lg:col-span-3 lg:py-10 lg:px-8 xl:pl-12 ">
            <div className=" mx-auto lg:max-w-none ">
              <BasicForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
