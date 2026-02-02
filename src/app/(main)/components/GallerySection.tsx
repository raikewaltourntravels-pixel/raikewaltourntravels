import Image from 'next/image';

const galleryImages = [
  '/images/Media (1).jpg',
  '/images/Media (2).jpg',
  '/images/Media (3).jpg',
  '/images/Media (4).jpg',
  '/images/Media (5).jpg',
  '/images/Media (6).jpg',
];

export default function GallerySection() {
  return (
    <section className='space-y-5'>
      <div className='text-center'>
        <h2 className='text-2xl font-semibold tracking-tight sm:text-3xl'>
          Our Vehicle Fleet
        </h2>
        <p className='mt-2 text-sm text-slate-600 sm:text-base'>
          Well-maintained, clean and comfortable vehicles for your journey
        </p>
      </div>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {galleryImages.map((src, idx) => (
          <div
            key={idx}
            className='group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md'
          >
            <Image
              src={src}
              alt={`Vehicle interior and exterior view ${idx + 1}`}
              width={400}
              height={300}
              className='h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105'
            />
          </div>
        ))}
      </div>
    </section>
  );
}
