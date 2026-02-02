export default function WhyUsSection() {
  return (
    <section className='space-y-5'>
      <h2 className='text-2xl font-semibold tracking-tight sm:text-3xl'>
        Why book Raikewal Tour & Travel?
      </h2>
      <div className='grid gap-4 md:grid-cols-3'>
        <div className='rounded-2xl border border-slate-200 bg-white p-4'>
          <p className='text-sm font-semibold text-slate-900'>
            Clean, Family-Friendly Car
          </p>
          <p className='mt-2 text-xs text-slate-600'>
            We keep all our vehicles neat, sanitized and comfortable. Perfect
            for kids, elders and long outstation journeys.
          </p>
        </div>
        <div className='rounded-2xl border border-slate-200 bg-white p-4'>
          <p className='text-sm font-semibold text-slate-900'>
            Transparent Pricing
          </p>
          <p className='mt-2 text-xs text-slate-600'>
            No hidden charges. All driver allowance, toll and parking will be
            clearly shared before you confirm your booking.
          </p>
        </div>
        <div className='rounded-2xl border border-slate-200 bg-white p-4'>
          <p className='text-sm font-semibold text-slate-900'>
            Flexible Pickup & Routes
          </p>
          <p className='mt-2 text-xs text-slate-600'>
            Home pickup and multiple-drop options inside the city. Custom routes
            for temples, tourist spots and native place visits.
          </p>
        </div>
      </div>
    </section>
  );
}
