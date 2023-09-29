


const stats = [
  { id: 1, name: "Active clients", value: "1000+" },
  { id: 2, name: "Monthly Clients Rate", value: "3%" },
  { id: 3, name: "Clients Satifaction", value: "99.9%" },
  { id: 4, name: "Annual Revenue", value: "$1L" },
];


export default function Stats() {

 

 
  return (

    
    
    <div className="  sm:py-40">
      <div className="mx-auto   max-w-7xl px-7 lg:px-199">
        <div className="mx-auto max-w-2xl   sm:py-3  lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by creators worldwide
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Creators Worldwide Trust Us Unconditionally.
          </p>
        </div>
      </div>

      <div className=" py-24 sm:py-20 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-2  bg-gray-50 rounded-2xl  gap-x-2 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto py-4 flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 font-semibold text-gray-950 ">
                  {stat.name}
                </dt>
                <dd className="order-first text-2xl  font-medium tracking-tight  text-gray-900 sm:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
