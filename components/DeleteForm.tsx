'use client';

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { revalidatePath } from 'next/cache';
import toast from 'react-hot-toast';
import { deleteTask } from '@/utils/actions';
import { useRouter } from 'next/navigation';

const SubmitForm = () => {
  const { pending } = useFormStatus();

  return (
    <button className='btn btn-error btn-xs uppercase' disabled={pending}>
      {pending ? 'pending...' : 'delete'}
    </button>
  );
};

const DeleteForm = ({ id }: { id: string }) => {
  const [formState, formAction] = useFormState(deleteTask, { message: '' });
  const router = useRouter();

  console.log('formState', formState.message);

  useEffect(() => {
    if (formState.message === 'success') {
      toast.success('Successfully Deleted!');
    }
    if (formState.message === 'error') {
      toast.success("Could't deleted try again!");
    }
    if (formState.message) {
      router.refresh();
    }
  }, [formState, router]);

  return (
    <form action={formAction}>
      {/* We get error when we call like this "action={(formData) => deleteTask(formData, id)}", so we are passing id value through hidden input. */}
      <input type='hidden' name='id' value={id} />
      <SubmitForm />
    </form>
  );
};

export default DeleteForm;
