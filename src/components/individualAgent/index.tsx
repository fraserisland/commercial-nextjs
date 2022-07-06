import { Tab } from '@headlessui/react';
import React, { useState } from 'react';

import type { IAgent } from '@/types';

import Notification from '../notification';

const IndividualAgent = ({ agent }: { agent: IAgent }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const disableForm = isSuccess;

  const [form, setForm] = useState({
    name: '',
    phone: '',
    message: '',
    email: '',
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log({
        email: form.email,
        name: form.name,
        phone: form.phone,
        message: form.message,
      });
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    } catch {
      console.log(e);
    } finally {
      setIsSuccess(true);
    }
  };

  const handleChange = (e: any) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-whiteLinen">
      <div className="mx-auto max-w-2xl py-10 px-4 sm:px-6 lg:max-w-7xl lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
              <Tab.Panel key={agent.id}>
                <img
                  src={agent.imageUrl}
                  alt="agent image"
                  className="h-full w-full object-cover object-center sm:rounded-lg"
                />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-orange-500">
              {agent.name}
            </h1>

            <div className="mt-3">
              <p className="text-3xl text-orange-300">{agent.role}</p>
            </div>

            {agent.mobile ? (
              <p className="pt-3">
                <a href={`tel: ${agent.mobile}`}>M. {agent.mobile}</a>
              </p>
            ) : (
              <p></p>
            )}

            <div className="mt-6">
              <div
                className="space-y-6 text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: agent.about! }}
              />
            </div>
          </div>
        </div>
      </div>
      <>
        <div className="overflow-hidden bg-whiteLinen py-8 px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-6xl border-2 border-black p-10">
            <div className="">
              <h1 className="text-xl md:text-2xl lg:text-3xl">
                Contact {agent.name} for further information
              </h1>
              <br />
              <form
                name="contact"
                action="#"
                method="POST"
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      disabled={disableForm}
                      onChange={handleChange}
                      required={true}
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="full name"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      disabled={disableForm}
                      onChange={handleChange}
                      required={true}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <div className="mt-1">
                    <input
                      disabled={disableForm}
                      onChange={handleChange}
                      required={true}
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm  focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      disabled={disableForm}
                      onChange={handleChange}
                      required={true}
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border border-gray-300 py-3 px-4 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                      defaultValue={''}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <button
                    disabled={disableForm}
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-orange-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Notification
          show={showNotification}
          title={`Thanks!`}
          description="We will be in touch as soon as possible."
        />
      </>
    </div>
  );
};

export default IndividualAgent;
