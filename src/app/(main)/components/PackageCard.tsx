import { Package } from '../../../common/helpers/packages';

interface PackageCardProps {
  pkg: Package;
  createWhatsAppUrl: (packageTitle: string) => string;
}

export default function PackageCard({
  pkg,
  createWhatsAppUrl,
}: PackageCardProps) {
  const isEmerald = pkg.accent === 'emerald';
  const isCyan = pkg.accent === 'cyan';
  const isFuchsia = pkg.accent === 'fuchsia';

  const tagColor =
    (isEmerald && 'text-emerald-700') ||
    (isCyan && 'text-cyan-700') ||
    (isFuchsia && 'text-fuchsia-700') ||
    'text-slate-700';

  const borderColor =
    (isEmerald && 'border-emerald-200') ||
    (isCyan && 'border-cyan-200') ||
    (isFuchsia && 'border-fuchsia-200') ||
    'border-slate-200';

  const noteColor =
    (isEmerald && 'text-emerald-700') ||
    (isCyan && 'text-cyan-700') ||
    (isFuchsia && 'text-fuchsia-700') ||
    'text-slate-700';

  const buttonBg =
    (isEmerald && 'bg-emerald-500 hover:bg-emerald-600') ||
    (isCyan && 'bg-cyan-500 hover:bg-cyan-600') ||
    (isFuchsia && 'bg-fuchsia-500 hover:bg-fuchsia-600') ||
    'bg-slate-900 hover:bg-slate-950';

  return (
    <div
      className={`flex flex-col justify-between overflow-hidden rounded-2xl border ${borderColor} bg-white shadow-sm transition hover:shadow-md`}
    >
      <div className='flex flex-col justify-between px-4 py-5'>
        <div>
          <p
            className={`text-xs font-semibold uppercase tracking-[0.25em] ${tagColor}`}
          >
            {pkg.label}
          </p>
          <h3 className='mt-2 text-lg font-semibold text-slate-900'>
            {pkg.title}
          </h3>
          <p className='mt-2 text-xs text-slate-600'>{pkg.description}</p>
          <ul className='mt-3 space-y-1 text-xs text-slate-700'>
            {pkg.bullets.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className='mt-4 space-y-3'>
          <p className={`text-xs font-medium ${noteColor}`}>{pkg.note}</p>
          <a
            href={createWhatsAppUrl(pkg.title)}
            className={`inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-xs font-semibold text-white shadow-sm transition ${buttonBg}`}
            target='_blank'
            rel='noreferrer'
          >
            Book Now on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
