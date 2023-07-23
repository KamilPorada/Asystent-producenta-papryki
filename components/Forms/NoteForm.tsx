import { FormEvent } from 'react';
import Link from 'next/link';
import Button from '@components/UI/Button';
import SectionTitle from '@components/UI/SectionTitle';

interface AddNoteFormProps {
  note: {
    date: string;
    title: string;
    content: string;
  };
  setNote: (note: any) => void;
  submitting: boolean;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  error: string;
}

const AddNoteForm: React.FC<AddNoteFormProps> = (props) => {
  const { note, setNote, submitting, handleSubmit } = props;

  return (
    <section className='w-full mt-3 flex flex-col items-center text-black'>
      <SectionTitle title='Nowa notatka' />
      <p className='mt-3 lg:text-lg text-center'>
        Dodaj nową notatkę i wprowadź niezbędne informacje.
      </p>
      <form onSubmit={handleSubmit} className='mt-3 w-full max-w-2xl flex flex-col gap-4'>
        <label className='flex flex-col'>
          <span className='font-semibold text-base lg:text-lg text-secondaryColor'>Data</span>
          <input
            type='date'
            className='px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
            value={note?.date || ''}
            onChange={(e) => setNote({ ...note, date: e.target.value })}
          />
        </label>
        <label className='flex flex-col'>
          <span className='font-semibold text-base lg:text-lg text-secondaryColor'>Tytuł</span>
          <input
            onChange={(e) => setNote({ ...note, title: e.target.value })}
            type='text'
            placeholder='Wpisz tytuł'
            className='px-1 py-px text-base ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
            value={note?.title || ''}
            maxLength={30}
          />
        </label>
        <label className='flex flex-col'>
          <span className='font-semibold text-base lg:text-lg text-secondaryColor'>Treść notatki</span>
          <textarea
            onChange={(e) => setNote({ ...note, content: e.target.value })}
            placeholder='Wpisz treść notatki'
            className='max-h-28 px-1 py-px ring-1 ring-zinc-400 rounded focus:outline-none focus:ring-2 focus:ring-mainColor'
            value={note?.content || ''}
            maxLength={200}
          />
        </label>
        <p className='mt-1 text-center font-semibold text-red-500'>{props.error}</p>
        <div className='flex flex-row justify-center text-white'>
          <Link href='/'>
            <Button>Anuluj</Button>
          </Link>
          <Button disabled={submitting}>
            {submitting ? 'Dodawanie...' : 'Dodaj'}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddNoteForm;
