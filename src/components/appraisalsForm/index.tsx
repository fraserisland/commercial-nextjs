import React from "react";

import BasicForm from "../BasicForm";


const AppraisalsForm = () => {
 

  return (
    <>
      <div className="relative bg-white max-w-7xl m-auto shadow-2xl rounded-md border-2 border-gray-100 mt-4">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-white rounded-md" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="bg-white-50 py-10 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-16 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                Contact Our Appraisals Team
              </h2>
              <p className="mt-3 text-lg leading-6 text-blueCharcoal-500"></p>
              <dl className="mt-8 text-base text-gray-600">
                <div>
                  <dd>
                    <p>
                      {" "}
                      We&apos;d love to hear from you! Send us a message using this
                      form to enquire about a sales or rental appraisal on your
                      property.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-white py-6 px-4 sm:px-6 sm:m-2 lg:col-span-3 lg:py-10 lg:px-8 xl:pl-12 ">
            <div className="max-w-lg mx-auto lg:max-w-none ">
             <BasicForm/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppraisalsForm;
