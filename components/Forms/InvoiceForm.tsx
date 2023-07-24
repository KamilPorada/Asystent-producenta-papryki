import { FormEvent } from 'react';
import Link from 'next/link';
import Button from '@components/UI/Button';
import SectionTitle from '@components/UI/SectionTitle';
import React from 'react';

interface AddInvoiceFormProps {
  invoice: {
    date: string;
    invoiceNumber: string;
    totalSum: number;
    pointOfSale: string;
  };
  type: string;
  setInvoice: (invoice: any) => void;
  submitting: boolean;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  error: string;
  pointOfSales: PointOfSale[];
}

interface PointOfSale {
  _id: string;
  address: string;
  creator: {
    _id: string;
    email: string;
    username: string;
    image: string;
  };
  latitude: string;
  longitude: string;
  name: string;
  type: string;
}

const AddInvoiceForm: React.FC<AddInvoiceFormProps> = (props) => {
  const {
    type,
    invoice,
    setInvoice,
    submitting,
    handleSubmit,
    error,
    pointOfSales,
  } = props;

  return (
    <section className='w-full mt-3 flex flex-col items-center text-black'>
      <SectionTitle title={type === 'ADD' ? 'Nowa faktura' : 'Edycja faktury'} />
      <p className='mt-3 lg:text-lg text-center'>
        {type === 'ADD' ? 'Dodaj nową' : 'Edytuj'} fakturę i podaj niezbędne
        informacje.
      </p>
      <form
        onSubmit={handleSubmit}
        className='mt-3 w-full max-w-2xl flex flex-col gap-4'
      >
        <label className='flex flex-col'>
          <span className='font-semibold text-base lg:text-lg text-secondaryColor'>
            Data wystawienia
          </span>
          <input
            type='date'
            className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
            value={invoice.date}
            onChange={(e) => setInvoice({ ...invoice, date: e.target.value })}
          />
        </label>
        <label className='flex flex-col'>
          <span className='font-semibold text-base lg:text-lg text-secondaryColor'>
            Numer faktury
          </span>
          <input
            onChange={(e) =>
              setInvoice({ ...invoice, invoiceNumber: e.target.value })
            }
            type='text'
            placeholder='Wpisz numer faktury'
            className='px-1 py-px text-base ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
            value={invoice.invoiceNumber}
          />
        </label>
        <label className='flex flex-col'>
          <span className='font-semibold text-base lg:text-lg text-secondaryColor'>
            Suma
          </span>
          <input
            onChange={(e) =>
              setInvoice({ ...invoice, totalSum: parseFloat(e.target.value) })
            }
            type='number'
            step='any'
            placeholder='Wpisz sumę [zł]'
            className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
            value={invoice.totalSum}
          />
        </label>
        <label className='flex flex-col'>
          <span className='font-semibold text-base lg:text-lg text-secondaryColor'>
            Punkt sprzedaży
          </span>
          <select
            value={invoice?.pointOfSale || ''}
            onChange={(e) =>
              setInvoice({ ...invoice, pointOfSale: e.target.value })
            }
            className='px-1 py-px ring-1 text-base ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
          >
            <option disabled value='' className='text-sm'>
              --Wybierz punkt sprzedaży--
            </option>
            {pointOfSales.map((point, index) => (
              <option key={index} value={point.name} className='text-sm'>
                {point.name}
              </option>
            ))}
          </select>
        </label>
        <p className='mt-1 text-center font-semibold text-red-500'>{error}</p>
        <div className='flex flex-row justify-center text-white'>
          <Link href='/'>
            <Button>Anuluj</Button>
          </Link>
          <Button disabled={submitting}>
            {submitting
              ? type === 'ADD'
                ? 'Dodawanie...'
                : 'Edycja...'
              : type === 'ADD'
              ? 'Dodaj'
              : 'Edytuj'}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddInvoiceForm;
