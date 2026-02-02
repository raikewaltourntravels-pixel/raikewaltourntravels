import { whatsappNumber } from '../utils';

export default function ContactSection() {
  return (
    <section
      id='contact'
      className='rounded-3xl border border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-cyan-50 p-6 shadow-[0_20px_40px_rgba(16,185,129,0.25)] sm:p-8'
    >
      <div className='flex flex-col gap-6 md:flex-row md:items-start md:justify-between'>
        <div className='max-w-xl'>
          <h2 className='text-2xl font-semibold tracking-tight sm:text-3xl'>
            Ready to book a car?
          </h2>
          <p className='mt-2 text-sm text-slate-700 sm:text-base'>
            Send your trip details on WhatsApp or give a quick call. We&apos;ll
            reply with the best quote and simple confirmation steps.
          </p>
          <ul className='mt-3 text-xs text-slate-700 sm:text-sm'>
            <li>• Date & time</li>
            <li>• Pickup & drop location</li>
            <li>• Number of passengers</li>
            <li>• One-way / round trip / number of days</li>
          </ul>
        </div>

        <div className='space-y-3 text-sm font-medium text-slate-950 md:text-base'>
          <a
            href={`tel:+${whatsappNumber}`}
            className='flex items-center justify-center gap-2 rounded-full border border-emerald-300/70 bg-transparent px-6 py-2.5 text-emerald-700 transition hover:bg-emerald-50'
          >
            Call Now
          </a>

          <p className='text-[11px] text-emerald-700/80'>
            Service available on prior booking. Same-day trips subject to car
            availability.
          </p>
        </div>
      </div>
    </section>
  );
}
