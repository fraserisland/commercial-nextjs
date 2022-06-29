import React, { useState } from 'react';

const PropertyManagementForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);

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
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl lg:text-7xl">
            Your Property – Our Priority!
          </h2>
        </div>
        <p className="mx-auto my-6 max-w-6xl text-sm md:text-base">
          At Commercial 1 Property Management we specialise in Commercial and
          Industrial properties and are committed to ensuring you are provided
          with the highest level of service. <br />
          <br />
          Our team is experienced in overseeing the leasing of your property
          through to the management, collection of rent, inspections,
          maintenance, reporting, lease renewals, annual increases and tenant
          vacates. <br />
          <br />
          Please do not hesitate to contact a member of our team should you have
          any questions or require any further information.
        </p>
        <div className="relative mx-auto mt-3 max-w-6xl border-2 border-black p-10">
          <div className="mt-2">
            <h1 className="text-xl md:text-2xl lg:text-3xl">
              Request Further Information on Property Management
            </h1>
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

              <p className="sm:col-span-2">Enter your details:</p>

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
                <div className="mt-4 grid grid-cols-4 gap-y-4">
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
      {isSuccess && alert('message sent')}
    </>
  );
};

export default PropertyManagementForm;
