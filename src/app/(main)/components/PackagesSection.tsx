import { packages } from '../../../common/helpers/packages';
import { createWhatsAppUrl } from '../utils';
import PackageCard from './PackageCard';

export default function PackagesSection() {
  return (
    <section id='packages' className='space-y-6'>
      <div className='flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <h2 className='text-2xl font-semibold tracking-tight sm:text-3xl'>
            Popular Car Rental Packages
          </h2>
          <p className='mt-2 max-w-2xl text-sm text-slate-600 sm:text-base'>
            Transparent, simple pricing for local and outstation trips. Share
            your pickup location and destination to get the exact quote on
            WhatsApp or call.
          </p>
        </div>
        <p className='text-xs text-slate-500 sm:text-sm'>
          Custom tour plan? We&apos;ll create a package just for you.
        </p>
      </div>

      <div className='grid gap-5 md:grid-cols-3'>
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            pkg={pkg}
            createWhatsAppUrl={createWhatsAppUrl}
          />
        ))}
      </div>
    </section>
  );
}
