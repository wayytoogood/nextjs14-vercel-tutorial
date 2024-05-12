// This component is basically same component with TaskForm with pending state.
// In order to show pending state we need to use a hook so we need to add 'use-client' directive.
'use client';
import { generateTaskCustom } from '@/utils/actions';
import { useEffect } from 'react';
import { useFormStatus, useFormState } from 'react-dom';
import toast from 'react-hot-toast';

// useFormStatus doesn't track changes if the component that hook is used at is the same component that form is rendered.
// Basically it needs to be a child component that is rendered in a form element.
const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      disabled={pending}
      className='btn btn-primary join-item uppercase'
    >
      {pending ? 'please wait...' : 'generate task'}
    </button>
  );
};

const initialState = {
  message: null,
};

export const TaskFormCustom = () => {
  // We need to use useFormState to update and retrieve form state after submit.
  // formAction gets formData as argument and pass it to the it's relative function with it's previous state,
  //  so generateTaskCustom function will get prevState and fomData arguments(with this order).
  const [formState, formAction] = useFormState(
    generateTaskCustom,
    initialState
  );

  useEffect(() => {
    if (formState.message === 'success') {
      toast.success('Success');
    }
    if (formState.message === 'error') {
      toast.error('Error');
    }
  }, [formState]);

  return (
    <form action={formAction}>
      <div className='join w-full'>
        <input
          type='text'
          name='content'
          className='join-item w-full input input-bordered'
          placeholder='Write here'
          required
        />
        <SubmitButton />
      </div>
      {/* {formState.message ? <p className='mb-2'>{formState.message}</p> : ''} */}
    </form>
  );
};
