export interface Package {
  id: string;
  label: string;
  title: string;
  description: string;
  bullets: readonly string[];
  note: string;
  accent: 'emerald' | 'cyan' | 'fuchsia';
}

export const packages: readonly Package[] = [
  {
    id: 'city-8hr',
    label: 'City Use',
    title: '1 Day / 8 Hours Local Package',
    description:
      'Best for city meetings, shopping, hospital visits and local sightseeing.',
    bullets: [
      'Up to 80 km included (within city)',
      'Extra km and hours at nominal charge',
      'AC car with driver at your doorstep',
    ],
    note: "Share your date & pickup time to get today's best rate.",
    accent: 'emerald',
  },
  {
    id: 'outstation-2-3',
    label: 'Most Booked',
    title: '2 Day / 3 Day Outstation Trip',
    description:
      'Ideal for weekend getaways, temple tours and short family vacations.',
    bullets: [
      'Visit multiple destinations in one trip',
      'Driver allowance charged per day',
      'Option for night halt with flexible timings',
    ],
    note: 'Tell us the route (city-to-city) to receive an exact quote.',
    accent: 'cyan',
  },
  {
    id: 'other',
    label: 'Other / Custom',
    title: 'Custom Plan / Other',
    description:
      'Got a different itinerary or special requirements? We can arrange a package just for you!',
    bullets: [
      'Full customization of trip route and timing',
      'Perfect for multi-day or multi-city travel',
      'Special requests (business, events, etc.) welcome',
    ],
    note: 'Tell us your plan and we’ll create a package and quote for your needs.',
    accent: 'emerald',
  },
] as const;
