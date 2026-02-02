'use client';

import { useState } from 'react';
import { whatsappNumber } from '../utils';

interface BookingFormData {
  tripType: 'round-trip' | 'one-way' | '';
  pickupLocation: string;
  destination: string;
  date: string;
  time: string;
  passengers: string;
  packageType: string;
  additionalNotes: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    tripType: '',
    pickupLocation: '',
    destination: '',
    date: '',
    time: '',
    passengers: '',
    packageType: '',
    additionalNotes: '',
  });

  const [errors, setErrors] = useState<Partial<BookingFormData>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<BookingFormData> = {};

    if (!formData.tripType) newErrors.tripType = '';
    if (!formData.pickupLocation.trim())
      newErrors.pickupLocation = 'Pickup location is required';
    if (!formData.destination.trim())
      newErrors.destination = 'Destination is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.passengers)
      newErrors.passengers = 'Number of passengers is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Build WhatsApp message
    const message = `Hi, I want to book a car for a trip.

📋 *Trip Details:*
• Trip Type: ${formData.tripType === 'round-trip' ? 'Round Trip' : 'One Way'}
• Pickup Location: ${formData.pickupLocation}
• Destination: ${formData.destination}
• Date: ${formData.date}
• Time: ${formData.time}
• Number of Passengers: ${formData.passengers}
${formData.packageType ? `• Package: ${formData.packageType}` : ''}
${formData.additionalNotes
        ? `• Additional Notes: ${formData.additionalNotes}`
        : ''
      }

Please share the quote and booking confirmation.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <form
      onSubmit={handleSubmit}
      className='space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8'
    >
      <div>
        <h3 className='text-xl font-semibold text-slate-900'>
          Book Your Car Trip
        </h3>
        <p className='mt-1 text-sm text-slate-600'>
          Fill in your trip details and we&apos;ll send you a quote on WhatsApp
        </p>
      </div>

      {/* Trip Type */}
      <div>
        <label className='mb-2 block text-sm font-medium text-slate-700'>
          Trip Type <span className='text-red-500'>*</span>
        </label>
        <div className='grid grid-cols-2 gap-3'>
          <label className='flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 p-3 transition hover:border-emerald-300 hover:bg-emerald-50'>
            <input
              type='radio'
              name='tripType'
              value='round-trip'
              checked={formData.tripType === 'round-trip'}
              onChange={handleChange}
              className='h-4 w-4 text-emerald-600'
            />
            <span className='text-sm font-medium text-slate-700'>
              Round Trip
            </span>
          </label>
          <label className='flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 p-3 transition hover:border-emerald-300 hover:bg-emerald-50'>
            <input
              type='radio'
              name='tripType'
              value='one-way'
              checked={formData.tripType === 'one-way'}
              onChange={handleChange}
              className='h-4 w-4 text-emerald-600'
            />
            <span className='text-sm font-medium text-slate-700'>One Way</span>
          </label>
        </div>
        {errors.tripType && (
          <p className='mt-1 text-xs text-red-600'>{errors.tripType}</p>
        )}
      </div>

      {/* Pickup Location */}
      <div>
        <label
          htmlFor='pickupLocation'
          className='mb-2 block text-sm font-medium text-slate-700'
        >
          Pickup Location <span className='text-red-500'>*</span>
        </label>
        <input
          type='text'
          id='pickupLocation'
          name='pickupLocation'
          value={formData.pickupLocation}
          onChange={handleChange}
          placeholder='Enter pickup address or landmark'
          className='w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20'
        />
        {errors.pickupLocation && (
          <p className='mt-1 text-xs text-red-600'>{errors.pickupLocation}</p>
        )}
      </div>

      {/* Destination */}
      <div>
        <label
          htmlFor='destination'
          className='mb-2 block text-sm font-medium text-slate-700'
        >
          Destination <span className='text-red-500'>*</span>
        </label>
        <input
          type='text'
          id='destination'
          name='destination'
          value={formData.destination}
          onChange={handleChange}
          placeholder='Enter destination city or address'
          className='w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20'
        />
        {errors.destination && (
          <p className='mt-1 text-xs text-red-600'>{errors.destination}</p>
        )}
      </div>

      {/* Date and Time */}
      <div className='grid gap-5 sm:grid-cols-2'>
        <div>
          <label
            htmlFor='date'
            className='mb-2 block text-sm font-medium text-slate-700'
          >
            Date <span className='text-red-500'>*</span>
          </label>
          <input
            type='date'
            id='date'
            name='date'
            value={formData.date}
            onChange={handleChange}
            min={today}
            className='w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20'
          />
          {errors.date && (
            <p className='mt-1 text-xs text-red-600'>{errors.date}</p>
          )}
        </div>
        <div>
          <label
            htmlFor='time'
            className='mb-2 block text-sm font-medium text-slate-700'
          >
            Pickup Time <span className='text-red-500'>*</span>
          </label>
          <input
            type='time'
            id='time'
            name='time'
            value={formData.time}
            onChange={handleChange}
            className='w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20'
          />
          {errors.time && (
            <p className='mt-1 text-xs text-red-600'>{errors.time}</p>
          )}
        </div>
      </div>

      {/* Passengers and Package */}
      <div className='grid gap-5 sm:grid-cols-2'>
        <div>
          <label
            htmlFor='passengers'
            className='mb-2 block text-sm font-medium text-slate-700'
          >
            Number of Passengers <span className='text-red-500'>*</span>
          </label>
          <select
            id='passengers'
            name='passengers'
            value={formData.passengers}
            onChange={handleChange}
            className='w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20'
          >
            <option value=''>Select</option>
            <option value='1'>1 Passenger</option>
            <option value='2'>2 Passengers</option>
            <option value='3'>3 Passengers</option>
            <option value='4'>4 Passengers</option>
            <option value='5'>5 Passengers</option>
            <option value='6'>6 Passengers</option>
            <option value='7'>7 Passengers</option>
          </select>
          {errors.passengers && (
            <p className='mt-1 text-xs text-red-600'>{errors.passengers}</p>
          )}
        </div>
        <div>
          <label
            htmlFor='packageType'
            className='mb-2 block text-sm font-medium text-slate-700'
          >
            Package Type (Optional)
          </label>
          <select
            id='packageType'
            name='packageType'
            value={formData.packageType}
            onChange={handleChange}
            className='w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20'
          >
            <option value=''>Select package (optional)</option>
            <option value='1 Day / 8 Hours Local Package'>
              1 Day / 8 Hours Local Package
            </option>
            <option value='2 Day / 3 Day Outstation Trip'>
              2 Day / 3 Day Outstation Trip
            </option>
            <option value='Airport / Station Pickup & Drop'>
              Airport / Station Pickup & Drop
            </option>
            <option value='Custom Package'>Custom Package</option>
          </select>
        </div>
      </div>

      {/* Additional Notes */}
      <div>
        <label
          htmlFor='additionalNotes'
          className='mb-2 block text-sm font-medium text-slate-700'
        >
          Additional Notes (Optional)
        </label>
        <textarea
          id='additionalNotes'
          name='additionalNotes'
          value={formData.additionalNotes}
          onChange={handleChange}
          rows={3}
          placeholder='Any special requirements, flight/train details, multiple stops, etc.'
          className='w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20'
        />
      </div>

      {/* Submit Button */}
      <button
        type='submit'
        className='w-full rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-500/30 transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2'
      >
        Send Details on WhatsApp
      </button>

      <p className='text-center text-xs text-slate-500'>
        We&apos;ll reply with the best quote and booking confirmation steps
      </p>
    </form>
  );
}
