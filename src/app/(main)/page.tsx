import BookingForm from './components/BookingForm';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import GallerySection from './components/GallerySection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PackagesSection from './components/PackagesSection';
import WhyUsSection from './components/WhyUsSection';

export default function Home() {
  return (
    <div className='min-h-screen bg-slate-50 text-slate-900'>
      <Header />

      <main className='mx-auto flex max-w-5xl flex-col gap-16 px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-16'>
        <HeroSection />
        <PackagesSection />
        <GallerySection />
        <WhyUsSection />
        <FAQSection />

        {/* Booking Form Section */}
        <section id='booking' className='space-y-6'>
          <div className='text-center'>
            <h2 className='text-2xl font-semibold tracking-tight sm:text-3xl'>
              Book Your Car Trip
            </h2>
            <p className='mt-2 text-sm text-slate-600 sm:text-base'>
              Fill in your trip details below and we&apos;ll send you a quote on
              WhatsApp
            </p>
          </div>
          <BookingForm />
        </section>

        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
