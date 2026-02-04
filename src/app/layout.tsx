import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { siteUrl } from './(main)/utils';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});



export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Raikewal Tour & Travel',
  description:
    'Raikewal Tour & Travel offers affordable car rental with driver for holiday packages, tour packages, outstation trips, and city rides. Book SUVs, Sedans, MUVs, Minibuses and Buses for family tours, temple trips, hill station visits, wedding travel, corporate trips, and airport transfers. Custom holiday packages available.',
  keywords: [
    'Avantika Travels',
    'Avantika Travels car rental',
    'Avantika Travels holiday packages',
    'Avantika Travels tour packages',
    'Avantika Travels car rental with driver',
    'Avantika Travels outstation cab',
    'Avantika Travels holiday car rental',
    'Avantika Travels family holiday package',
    'Avantika Travels temple tour package',
    'Avantika Travels hill station tour',
    'Avantika Travels weekend getaway',
    'Avantika Travels custom holiday package',
    'Avantika Travels wedding car rental',
    'Avantika Travels corporate car rental',
    'Avantika Travels airport pickup',
    'car rental',
    'car rental with driver',
    'outstation cab',
    'family car rental',
    'airport pickup car',
    'SUV rental',
    'sedan rental',
    'minibus rental',
    'bus rental',
    'holiday packages',
    'tour packages',
    'holiday car rental',
    'tour package car rental',
    'car rental for outstation trip',
    'weekend trip car rental',
    'road trip with driver',
    'cab for family trip',
    'car rental for temple trip',
    'temple tour package',
    'car rental for hill station trip',
    'hill station tour package',
    'one way trip car',
    'round trip cab',
    'long distance travel car',
    'wedding car rental',
    'corporate car rental',
    'group travel car rental',
    'family holiday package',
    'summer holiday package',
    'winter holiday package',
    'festival tour package',
    'pilgrimage tour package',
    'adventure tour package',
    'custom holiday package',
    'multi-city tour package',
    'weekend getaway package',
    'honeymoon car rental',
    'business trip car rental',
    'event car rental',
    'airport transfer service',
    'railway station pickup',
    'hotel pickup service',
    'raikewal',
    'raikewal tour travels',
    'tour travels',
    'Raikewal Tour & Travel',
    'city sightseeing car',
    'local tour car rental',
    'intercity car rental',
    'state to state car rental',
    'long weekend package',
    'extended tour package',
    'customized travel package',
    'holiday travel packages',
    'holiday tour packages',
    'affordable holiday packages',
    'family holiday travel',
    'holiday trip car rental',
    'holiday vacation car rental',
    'holiday tour car rental',
    'holiday travel car rental',
    'holiday package deals',
    'holiday tour deals',
    'holiday car booking',
    'holiday trip booking',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
  },
  openGraph: {
    title:
      'Raikewal Tour & Travel | Car Rental with Driver',
    description:
      'Book affordable car rental with driver for holiday packages, tour packages, family trips, temple tours, hill station visits, and corporate travel. Multiple vehicle options including SUVs, Sedans, MUVs, Minibuses and Buses. Custom holiday packages, transparent pricing, clean AC cars, on-time service.',
    url: siteUrl,
    type: 'website',
    siteName: 'Raikewal Tour & Travel',
    images: [
      {
        url: `${siteUrl}/images/logo-with-bg.png`,
        width: 1200,
        height: 630,
        alt: 'Raikewal Tour & Travel - Car Rental with Driver',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raikewal Tour & Travel | Car Rental with Driver',
    description:
      'Affordable car rental with driver for holiday packages, tour packages, family trips, temple tours, and outstation travel. Multiple vehicle options available. Custom packages for all your travel needs.',
    images: [`${siteUrl}/images/logo-with-bg.png`],
  },
  category: 'Travel & Tourism',
  authors: [{ name: 'Raikewal Tour & Travel' }],
  other: {
    'application-name': 'Raikewal Tour & Travel',
    'apple-mobile-web-app-title': 'Raikewal Tour & Travel',
    'mobile-web-app-capable': 'yes',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
