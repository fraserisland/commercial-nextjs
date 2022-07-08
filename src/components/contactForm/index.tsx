import React, { useState } from "react";


import Notification from "../notification";

import { MailIcon, PhoneIcon } from "@heroicons/react/outline";


const ContactForm = () => {

  const [isSuccess, setIsSuccess] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const disableForm = isSuccess;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
    email: "",
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
    <>
      

      <div className="relative bg-white lg:my-10 max-w-7xl m-auto shadow-2xl rounded-md border-2 border-gray-100">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-white rounded-md" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="bg-white-50 py-10 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-16 xl:pr-12">
            <div className="max-w-lg mx-auto">
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
                    <span className="ml-3">support@example.com</span>
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
            <div className="max-w-lg mx-auto lg:max-w-none ">
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
                      defaultValue={""}
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

      

      </div>
      <Notification
        show={showNotification}
        title={`Thanks!`}
        description="We will be in touch as soon as possible."
      />

    </>
  );
};

export default ContactForm;
