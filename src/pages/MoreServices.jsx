import React from "react";
import {
  TruckIcon,
  WrenchIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";


const features = [
  {
    name: "Application Services",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: UserGroupIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: WrenchIcon,
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: TruckIcon,
  },
];



const features2 = [
  {
    name: "Banking",
    description:
      "Serole offers banking specific services and solutions tailored to transform Banking Service and help you move on the road to growth and efficiency. Combining technology capabilities with strong banking domain skills, the Banking practice at Serole covers a large footprint in the banking domain.",
    icon: UserGroupIcon,
    Moreservices: <button>More Services </button>,
  },
  {
    name: "Insurance",
    description:
      "Serole offers banking specific services and solutions tailored to transform Banking Service and help you move on the road to growth and efficiency. Combining technology capabilities with strong banking domain skills, the Banking practice at Serole covers a large footprint in the banking domain.",
    icon: WrenchIcon,
    Moreservices: <button>More Services </button>,
  },
  {
    name: "Telecommunications",
    description:
      "Serole offers banking specific services and solutions tailored to transform Banking Service and help you move on the road to growth and efficiency. Combining technology capabilities with strong banking domain skills, the Banking practice at Serole covers a large footprint in the banking domain.",

    icon: WrenchScrewdriverIcon,
    Moreservices: <button>More Services </button>,
  },
  {
    name: "Government",
    description:
      "Serole offers banking specific services and solutions tailored to transform Banking Service and help you move on the road to growth and efficiency. Combining technology capabilities with strong banking domain skills, the Banking practice at Serole covers a large footprint in the banking domain.",
    icon: TruckIcon,
    Moreservices: <button>More Services </button>,
  },
];

const MoreServices = () => {
  return (
    
    <div className="">






      
      <div className="bg-white  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-199">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Deploy Now
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explore Our More Services
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              "Unlock the power of our professional services, meticulously
              tailored to enhance your projects, bring your vision to life, and
              exceed every expectation."
            </p>
          </div>

          <div className="mx-auto  mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-2xl  grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none   lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative shadow-xl pl-16 py-2  px-6  pb-8  ring-gray-900/5 sm:rounded-lg"
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-3 top-4   flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500">
                      <feature.icon
                        className="h-6  w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}{" "}
                  </dd>

                  {/* <div className="mt-7 text-base text-gray-600 flex justify-end"> 
                 <button className="bg-indigo-600 hover:bg-indigo-700 text-white  font-semibold py-1.5 px-4 rounded-full">{feature.Moreservices}</button> </div>
               */}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Deploy Now
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explore Our More Industrial  Services
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              "Unlock the power of our professional services, meticulously
              tailored to enhance your projects, bring your vision to life, and
              exceed every expectation."
            </p>
          </div>

          <div className="mx-auto  mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-2xl  grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none   lg:grid-cols-2 lg:gap-y-16">
              {features2.map((feature) => (
                <div
                  key={feature.name}
                  className="relative shadow-xl pl-16 py-2  px-6  pb-8  ring-gray-900/5 sm:rounded-lg"
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-3 top-4   flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500">
                      <feature.icon
                        className="h-6  w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}{" "}
                  </dd>

                  {/* <div className="mt-7 text-base text-gray-600 flex justify-end"> 
                 <button className="bg-indigo-600 hover:bg-indigo-700 text-white  font-semibold py-1.5 px-4 rounded-full">{feature.Moreservices}</button> </div>
               */}
                </div>
              ))}
            </dl>
          </div>

   
    </div>
  );
};

export default MoreServices;
