import React, { useState } from 'react';

import Notification from '../notification';

const PropertyManagementForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const disableForm = isSuccess;

  const [form, setForm] = useState({
    name: '',
    phone: '',
    message: '',
    email: '',
    propertyAddress: '',
    propertyDetails: '',
    time: '',
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log({
        email: form.email,
        name: form.name,
        phone: form.phone,
        'property details': form.propertyDetails,
        'property address': form.propertyAddress,
        time: form.time,
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
      <div className="overflow-hidden bg-whiteLinen py-8 px-4 sm:px-6 lg:px-8">
        
        <div className="relative mx-auto mt-3 max-w-5xl shadow-2xl rounded-md p-10">
          <div className="mt-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Contact Our Property Management Team</h2>
                <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                  We’d love to hear from you! Send us a message using the form below to enquire about our property management services.
                </p>
            <br />
            <form
              name="propertyManagement"
              action="#"
              method="POST"
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div className="sm:col-span-2">
                <label
                  htmlFor="propertyAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Property Addresss
                </label>
                <div className="mt-1">
                  <textarea
                    disabled={disableForm}
                    onChange={handleChange}
                    required={true}
                    id="propertyAddress"
                    name="propertyAddress"
                    rows={1}
                    className="block w-full rounded-md border border-gray-300 py-3 px-4 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    defaultValue={''}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="propertyDetails"
                  className="block text-sm font-medium text-gray-700"
                >
                  Property Details
                </label>
                <div className="mt-1">
                  <textarea
                    disabled={disableForm}
                    onChange={handleChange}
                    required={true}
                    id="propertyDetails"
                    name="propertyDetails"
                    rows={4}
                    className="block w-full rounded-md border border-gray-300 py-3 px-4 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    defaultValue={''}
                  />
                </div>
              </div>

              <p className="sm:col-span-2 mt-4 text-lg text-gray-500 sm:mt-3">Enter your details:</p>

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

              <fieldset className="sm:col-span-2">
                <legend className="block text-sm font-medium text-gray-700">
                  Preferred contact time:
                </legend>
                <div className="mt-4 grid grid-cols-1 gap-y-4 md:grid-cols-4">
                  <div className="flex items-center">
                    <input
                      onChange={handleChange}
                      id="8am-10am"
                      name="time"
                      defaultValue="8am-10am"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="8am-10am" className="ml-3">
                      <span className="block text-sm text-gray-700">
                        8am - 10am
                      </span>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      onChange={handleChange}
                      id="10am-12pm"
                      name="time"
                      defaultValue="10am-12pm"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="10am-12pm" className="ml-3">
                      <span className="block text-sm text-gray-700">
                        10am - 12pm
                      </span>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      onChange={handleChange}
                      id="12pm-2pm"
                      name="time"
                      defaultValue="12pm-2pm"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="12pm-2pm" className="ml-3">
                      <span className="block text-sm text-gray-700">
                        12pm - 2pm
                      </span>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      onChange={handleChange}
                      id="2pm-4pm"
                      name="time"
                      defaultValue="2pm-4pm"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="2pm-4pm" className="ml-3">
                      <span className="block text-sm text-gray-700">
                        2pm - 4pm
                      </span>
                    </label>
                  </div>
                </div>
              </fieldset>

              <div className="sm:col-span-2">
                <button
                  disabled={disableForm}
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-orange-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Send Enquiry
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
  );
};

export default PropertyManagementForm;
