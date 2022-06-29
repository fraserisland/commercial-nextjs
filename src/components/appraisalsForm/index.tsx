import React, { useState } from 'react';

const AppraisalsForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);

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
      <div className="overflow-hidden bg-whiteLinen  py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl lg:text-7xl">
            What&apos;s Your Commercial Property Worth?
          </h2>
        </div>
        <div className="relative mx-auto mt-3 max-w-6xl border-2 border-black p-10">
          <div className="mt-2">
            <h1 className="text-xl md:text-2xl lg:text-3xl">
              Request an appraisal on your property:
            </h1>
            <br />
            <form
              name="appraisal"
              action="#"
              method="POST"
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
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

export default AppraisalsForm;
