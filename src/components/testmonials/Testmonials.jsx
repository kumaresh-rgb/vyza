import Marquee from "react-fast-marquee";

// Define a reusable testimonial component
const Testimonial = ({ quote, author, role, company }) => (
  <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
    <div className="mx-auto max-w-2xl lg:max-w-4xl">
      <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
      <figure className="mt-10">
        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
          <p>{quote}</p>
        </blockquote>
        <figcaption className="mt-10">
          <img
            className="mx-auto h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="mt-4 flex items-center justify-center space-x-3 text-base">
            <div className="font-semibold text-gray-900">{author} - {role}</div>
            <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
              <circle cx={1} cy={1} r={1} />
            </svg>
            <div className="text-gray-600">{company}</div>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
);

export default function Testimonials() {
  return (
    <div className="your-container-class">
      <div className="mx-auto max-w-7xl px-7 lg:px-199">
        <div className="mx-auto max-w-2xl sm:py-3 lg:text-center">
          <h2 className="text-2xl font-bold leading-7 text-indigo-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We have worked with thousands of amazing people
          </p>
        </div>
      </div>
      <Marquee>
        {/* Render your testimonial sections using the Testimonial component */}
        <Testimonial
          quote="A very big thank you to you and tour team for coming together to have this matter resolved. Considering the condition of the instance, your team performed remarkably and were very professional in all aspects. I look forward to working with your team again in the future."
          author="Jack Epsimos"
          role="Performance & Environment Services"
          company="Optus"
        />
        <Testimonial
          quote="I would like to communicate my appreciation to the Serole team on their work on the successful implementation of “EIP Throttling” project. Serole Team lead the development and implementation of a solution to production problem that had impacted customer experience due provisioning delays."
          author="Einat Zobel"
          role="Project Manager"
          company="Lion Pty Limited"
        />
        <Testimonial
          quote="Thanks for your demonstration this afternoon. It was exciting to see it in action, using the words of the CAM specialist who witnessed its capability: 'Wow, that's amazing!'. It has really given me a confidence boost in T&Ps delivery and us being able to achieve some great tactical solutions next FY - it is truly exciting. Keep it up, thanks for your continued support and see you soon!"
          author="Digby Wilson"
          role="Head of Provisioning"
          company="Optus"
        />
      </Marquee>
    </div>
  );
}
