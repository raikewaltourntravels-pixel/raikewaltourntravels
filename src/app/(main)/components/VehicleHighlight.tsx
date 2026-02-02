export default function VehicleHighlight() {
  return (
    <div className='relative overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-br from-emerald-50 via-white to-cyan-50 p-5 shadow-[0_20px_40px_rgba(15,118,110,0.15)]'>
      <div className='relative space-y-4'>
        <p className='text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700'>
          Vehicle Highlight
        </p>
        <div className='space-y-1'>
          <p className='text-lg font-semibold text-slate-900'>
            Multiple Vehicle Options
          </p>
          <p className='text-xs text-slate-600'>
            SUVs • Sedans • MUVs • Minibuses • Buses • All with AC and
            professional drivers
          </p>
        </div>

        <dl className='grid grid-cols-2 gap-3 text-xs text-slate-700'>
          <div className='rounded-2xl border border-emerald-100 bg-white p-3'>
            <dt className='text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700'>
              Seating
            </dt>
            <dd className='mt-1 text-sm font-semibold'>6+Driver</dd>
            <p className='mt-0.5 text-[11px] text-slate-600'>
              Ideal for 4–6 adults with luggage.
            </p>
          </div>
          <div className='rounded-2xl border border-emerald-100 bg-white p-3'>
            <dt className='text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700'>
              Comfort
            </dt>
            <dd className='mt-1 text-sm font-semibold'>AC • Music</dd>
            <p className='mt-0.5 text-[11px] text-slate-600'>
              Clean, fresh and regularly sanitized.
            </p>
          </div>
          <div className='rounded-2xl border border-emerald-100 bg-white p-3'>
            <dt className='text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700'>
              Safety
            </dt>
            <dd className='mt-1 text-sm font-semibold'>Experienced</dd>
            <p className='mt-0.5 text-[11px] text-slate-600'>
              Trained driver, safe highway driving.
            </p>
          </div>
          <div className='rounded-2xl border border-emerald-100 bg-white p-3'>
            <dt className='text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700'>
              Usage
            </dt>
            <dd className='mt-1 text-sm font-semibold'>City + Outstation</dd>
            <p className='mt-0.5 text-[11px] text-slate-600'>
              Available for full day, multi-day trips.
            </p>
          </div>
        </dl>

        <p className='mt-2 text-[11px] text-slate-500'>
          Note: Fuel, toll, parking and interstate taxes as per actuals (will be
          shared clearly before the trip).
        </p>
      </div>
    </div>
  );
}
