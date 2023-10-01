import Marquee from "react-fast-marquee";

export default function Testimonials() {
  // Define your testimonial sections as you did previously

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
        {/* Render your testimonial sections here */}
        <Testmonials1 />
        <Testmonials2 />
        <Testmonials3 />
      </Marquee>
    </div>
  );
}
