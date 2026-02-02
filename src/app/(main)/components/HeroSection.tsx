import VehicleHighlight from './VehicleHighlight';

export default function HeroSection() {
  return (
    <section className='grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-center'>
      <div>
        <div className='inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-emerald-700'>
          Outstation & City Rides
          <span className='h-1 w-1 rounded-full bg-emerald-500' />
          Family Trips • Airport Drops
        </div>
        <h1 className='mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl'>
          Rent a car for your{' '}
          <span className='bg-linear-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent'>
            next trip
          </span>
        </h1>
        <p className='mt-4 max-w-xl text-balance text-sm leading-relaxed text-slate-600 sm:text-base'>
          Raikewal Tour & Travel offers clean, AC cars with experienced drivers for
          1-day, 2-day, 3-day and custom tour packages. Multiple vehicle options
          including SUVs, Sedans, MUVs, Minibuses and Buses. Perfect for family
          tours, temple visits, weekend trips and airport pickup or drop.
        </p>

        <dl className='mt-6 grid max-w-xl grid-cols-2 gap-4 text-xs text-slate-600 sm:text-sm'>
          <div>
            <dt className='font-semibold text-emerald-700'>
              Why choose Raikewal Tour & Travel?
            </dt>
            <dd className='mt-1 space-y-1'>
              <p>• Multiple vehicle options for all needs</p>
              <p>• Well-maintained, AC, music system</p>
              <p>• Professional, polite drivers</p>
            </dd>
          </div>
          <div>
            <dt className='font-semibold text-emerald-700'>Perfect for</dt>
            <dd className='mt-1 space-y-1'>
              <p>• Family & group tours</p>
              <p>• Outstation & city sightseeing</p>
              <p>• Airport / railway transfers</p>
            </dd>
          </div>
        </dl>

        <div className='mt-8 flex flex-wrap items-center gap-4'>
          <a
            href='#packages'
            className='rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/30 transition hover:bg-emerald-600'
          >
            View Packages
          </a>
          <a
            href='#contact'
            className='text-sm font-medium text-emerald-700 underline-offset-4 hover:text-emerald-800 hover:underline'
          >
            WhatsApp / Call for instant quote
          </a>
        </div>
      </div>

      <VehicleHighlight />
    </section>
  );
}
