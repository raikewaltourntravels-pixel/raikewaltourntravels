import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='border-b border-slate-200 bg-white/90 backdrop-blur'>
      <div className='mx-auto flex max-w-5xl items-center justify-between  sm:px-6 lg:px-8'>
        <Link href='/' className='flex items-center gap-4'>
          <Image
            src='/images/logo2.png'
            alt='Raikewal Tour & Travel Logo'
            width={200}
            height={20}
            className='h-16 p-2 w-auto object-contain'
            priority
          />
          <div className='hidden sm:block'>
            <p className='text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600'>
              Raikewal Tour & Travel
            </p>
            <p className='text-sm text-slate-500'>
              Car rental with driver for all your travel needs
            </p>
          </div>
        </Link>
      </div>
    </header>
  );
}
