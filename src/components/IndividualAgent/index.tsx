import React from "react";
import Header from "@/components/Header";
import type { IAgent } from "@/types";
import { PhoneIcon } from "@heroicons/react/outline";
import BasicForm from "../BasicForm";
import Image from "next/image";

const IndividualAgent = ({ agent }: { agent: IAgent }) => {
  return (
    <>
      <Header tag="" title={agent.name} subtitle={agent.about} />
      <div className="bg-whiteLinen">
        <div className="relative bg-white lg:mb-16 max-w-7xl m-auto my-6 shadow-2xl rounded-md border-2 border-gray-100">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-white rounded-md" />
          </div>
          <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
            <div className="bg-white-50 py-10 px-4 sm:px-6 lg:col-span-2 lg:px-8  xl:pr-12">
              <div className="mx-auto">
                <div className="relative h-[400px] md:h-[700px] lg:h-[500px]">
                <Image
                  src={agent.imageUrl}
                  alt={agent.name}
                  layout="fill"
                  height="100%"
                  width="100%"
                  className="rounded-lg object-cover"
                />
                </div>

                <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl pt-3">
                  Contact {agent.name}
                </h2>
                <p className="mt-3 text-lg leading-6 text-blueCharcoal-500">
                  {agent.role}
                </p>
                <dl className="mt-8 text-base text-gray-600">
                  <div className="mt-6">
                    <dt className="sr-only">Phone number</dt>
                    <dd className="flex">
                      <PhoneIcon
                        className="flex-shrink-0 h-6 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">{agent.mobile}</span>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="bg-white py-16 px-4 sm:px-6 sm:m-2 lg:col-span-3 lg:py-16 lg:px-8 xl:pl-12 ">
              <div className=" mx-auto lg:max-w-none ">
                <BasicForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualAgent;
