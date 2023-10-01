import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Application Services',
    description:
      'The evolving business landscape demands innovative custom applications to address dynamic challenges.',
    icon: CloudArrowUpIcon,
    Moreservices:<button>More Services </button>,
  },
  {
    name: 'Analytics and Business Intelligence Services',
    description:
     
'Leverage data for enhanced customer experiences and competitive advantage through Analytics and Business Intelligence Services.',
    icon: LockClosedIcon,
    Moreservices:<button>More Services </button>,
  },
  {
    name: 'Digital Services',
    description:
      'In the era of expanding internet usage, "Digital Transformation" is crucial for organizations to enhance their digital presence globally.',
    icon: ArrowPathIcon,
    Moreservices:<button>More Services </button>,
  },
  {
    name: 'Enterprise Software Services',
    description:
      'We transform and simplify outdated enterprise software with our expert consulting services from E2E solutions.',
    icon: FingerPrintIcon,
    Moreservices:<button>More Services </button>,
  },
]

export default function services() {
  return (
    <div className="">
  
    <div className="bg-white  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-199">



        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy Now</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Explore Our  Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          "Unlock the power of our professional services, meticulously tailored to enhance your projects, bring your vision to life, and exceed every expectation."
          </p>
        </div>




        <div className="mx-auto  mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-2xl  grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none   lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative shadow-xl pl-16 py-2  px-6  pb-8  ring-gray-900/5 sm:rounded-lg">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-3 top-4   flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6  w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description} </dd>
                
               
                <div className="mt-7 text-base text-gray-600 flex justify-end"> 
                 <button className="bg-indigo-600 hover:bg-indigo-700 text-white  font-semibold py-1.5 px-4 rounded-full">{feature.Moreservices}</button> </div>
              
              </div>
              
            ))}
          </dl>
          
        </div>  
       








      </div>
    </div>
        
    </div>
  )
}
