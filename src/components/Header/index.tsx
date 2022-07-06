import React from "react";

export default function Example({
  tag = "pricing",
  title = "Take control of your team.",
  subtitle = "Start building for free, then add a site plan to go live. Account plans unlock additional features.",
}) {
  return (
    <div>
      <div className="max-w-7xl mx-auto pt-8 pb-2 px-4  sm:px-6 lg:px-8">
        <div>
          <h2 className="text-base font-semibold text-orange-600 tracking-wide uppercase">{tag}</h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
            {title}
          </p>
          <p className="max-w-xl mt-5 text-lg text-gray-500">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
