import React from "react";

const WhatWeSay = () => {
  const tools = [
    {
      id: "01",
      title: "Cloud Penetration Testing",
      items: [],
    },
    {
      id: "02",
      title: "Android/Ios Penetration Testing",
      items: [],
    },
    {
      id: "03",
      title: "Api Penetration Testing",
      items: [],
    },
    {
      id: "04",
      title: "Network Penetration Testing",
      items: [],
    },
    {
      id: "05",
      title: "Web penetration Testing",
      items: [],
    },
  ];

  return (
    <section className="bg  py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-100">What We Say</h2>
      <div className="w-20 h-0.5 mx-auto mt-2"></div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {tools.map((tool, index) => (
          <div
            key={index}
            className=" bgmi  rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow"
          >
            <div>
              <h3 className="text-teal-500 text-2xl font-bold">{tool.id}</h3>
              <h4 className="text-teal-500 font-semibold mt-1">{tool.title}</h4>
              <ul className="mt-4 space-y-1 text-gray-300 text-sm">
                {tool.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6 w-12 h-1 bg-teal-800 mx-auto rounded"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeSay;
