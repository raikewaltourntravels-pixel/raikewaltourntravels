export default function FAQSection() {
  return (
    <section className='space-y-5'>
      <h2 className='text-2xl font-semibold tracking-tight sm:text-3xl'>
        Car rental – frequently asked questions
      </h2>
      <div className='space-y-4 text-sm text-slate-700'>
        <div className='rounded-2xl border border-slate-200 bg-white p-4'>
          <p className='font-semibold'>
            How do I book a car on rent with driver?
          </p>
          <p className='mt-1 text-xs sm:text-sm'>
            Choose a package above and click on{' '}
            <span className='font-semibold'>"Book Now on WhatsApp"</span> or use
            the contact section to send your trip details. We will share the car
            rental price, inclusions and confirmation steps on WhatsApp or call.
          </p>
        </div>
        <div className='rounded-2xl border border-slate-200 bg-white p-4'>
          <p className='font-semibold'>
            What is included in the car rental charges?
          </p>
          <p className='mt-1 text-xs sm:text-sm'>
            The base car rental price covers the vehicle with driver for the
            selected package. Toll, parking, interstate tax and any extra
            kilometres or hours are charged separately and will be clearly
            mentioned before you confirm the trip.
          </p>
        </div>
        <div className='rounded-2xl border border-slate-200 bg-white p-4'>
          <p className='font-semibold'>What vehicle options do you have?</p>
          <p className='mt-1 text-xs sm:text-sm'>
            We offer multiple vehicle options including SUVs (6+1 seater),
            Sedans (4+1 seater), MUVs (6+1 seater), Minibuses (12+1 seater) and
            Buses (22+1 seater). All vehicles are well-maintained with AC and
            perfect for weekend tours, temple visits and outstation trips.
          </p>
        </div>
      </div>
    </section>
  );
}
