import React, { useState, useRef } from 'react'
import Notification from "@/components/Notification";
import emailjs from '@emailjs/browser';

const BasicForm = () => {

  const [isSuccess, setIsSuccess] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const disableForm = isSuccess;

  const [form, setForm] = useState({
    user_name: "",
    user_phone: "",
    message: "",
    user_email: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log({
        email: form.user_email,
        name: form.user_name,
        phone: form.user_phone,
        message: form.message,
      });
      emailjs.sendForm('contact', 'contact_form', form2.current as HTMLFormElement, 'F1azEZxseozcuFQq2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
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

  const form2 = useRef<HTMLFormElement>(null);


  return (
    <div>
             <form
                ref={form2}
                name="contact"
                action="#"
                method="POST"
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="user_name"
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
                      name="user_name"
                      id="user_name"
                      autoComplete="full name"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="user_email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      disabled={disableForm}
                      onChange={handleChange}
                      required={true}
                      id="user_email"
                      name="user_email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="user_phone"
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
                      name="user_phone"
                      id="user_phone"
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
              <Notification
        show={showNotification}
        title={`Thanks!`}
        description="We will be in touch as soon as possible."
      />
    </div>
  )
}

export default BasicForm