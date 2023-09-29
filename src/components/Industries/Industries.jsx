import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Banking',
    description:
      'Serole offers banking specific services and solutions tailored to transform Banking Service and help you move on the road to growth and efficiency. Combining technology capabilities with strong banking domain skills, the Banking practice at Serole covers a large footprint in the banking domain.',
    icon: CloudArrowUpIcon,
    Moreservices:<button>More Services </button>,
  },
  {
    name: 'Insurance',
    description:
    'Serole offers banking specific services and solutions tailored to transform Banking Service and help you move on the road to growth and efficiency. Combining technology capabilities with strong banking domain skills, the Banking practice at Serole covers a large footprint in the banking domain.',
        icon: LockClosedIcon,
    Moreservices:<button>More Services </button>,
  },
  {
    name: 'Telecommunications',
    description:
      'Serole offers banking specific services and solutions tailored to transform Banking Service and help you move on the road to growth and efficiency. Combining technology capabilities with strong banking domain skills, the Banking practice at Serole covers a large footprint in the banking domain.',

    icon: ArrowPathIcon,
    Moreservices:<button>More Services </button>,
  },
  {
    name: 'Government',
    description:
    'Serole offers banking specific services and solutions tailored to transform Banking Service and help you move on the road to growth and efficiency. Combining technology capabilities with strong banking domain skills, the Banking practice at Serole covers a large footprint in the banking domain.',
        icon: FingerPrintIcon,
    Moreservices:<button>More Services </button>,
  },
]

export default function Industries() {
  return (
    
    <div className="bg-white  py-24 sm:py-32">



      
      <div className="mx-auto max-w-7xl   px-6 lg:px-199">



        <div className="mx-auto max-w-2xl  py-20 sm:py-3  lg:text-center">
          <h2 className="text-base font-semibold leading-7  text-indigo-600">Deploy Faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight  text-gray-900 sm:text-4xl">
          Explore Our  Industries  Services
          </p>
          <p className="mt-6 text-lg leading-8  text-gray-600">
          "Explore Our Expertise: Unleash the Power of Tailored Services to Elevate Your Projects and Bring Your Vision to Life, Beyond Expectations."
          </p>
          
        </div>



        <div className="mx-auto mt-1 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
  <dl className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
    {features.map((feature) => (
      <div key={feature.name} className="relative shadow-xl py-4 px-6 pb-8 ring-gray-900/5 sm:rounded-lg">
        <dt className="text-base font-semibold leading-7 pl-12 text-gray-900">
          <div className="absolute left-3 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          {feature.name}
        </dt>
        <dd className="mt-9 ml-3 text-base leading-7 text-gray-600">{feature.description}</dd>

        <div className="mt-7 text-base text-gray-600 flex justify-end items-center h-12"> {/* Adjusted this line */}
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1.5 px-4 rounded-full">
            {feature.Moreservices}
          </button>
        </div>
      </div>
    ))}
  </dl>
</div>









      </div>
    </div>
  )
}
