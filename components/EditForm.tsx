import { editTask } from '@/utils/actions';

export const EditForm = ({
  task,
}: {
  task: {
    id: string;
    content: string;
    completed: boolean;
  } | null;
}) => {
  if (!task) {
    return (
      <h2 className='text-3xl font-semibold'>
        Could not find a task with specified id, reload the page for problems
        related to internet!
      </h2>
    );
  }

  const { id, content, completed } = task;

  return (
    <form
      action={editTask}
      className='flex flex-col gap-5 w-full border-2 border-base-200 rounded-lg p-8'
    >
      <input type='hidden' name='id' value={id} />
      <input
        type='text'
        name='content'
        defaultValue={content}
        className='input input-sm input-bordered w-full'
      />

      <label htmlFor='completed' className='label cursor-pointer'>
        <span className='label-text'>Completed</span>
        <input
          type='checkbox'
          name='completed'
          id='completed'
          defaultChecked={completed}
          className='checkbox checkbox-primary checkbox-sm'
        />
      </label>

      <button
        type='submit'
        className='btn btn-block btn-sm btn-primary uppercase'
      >
        Update
      </button>
    </form>
  );
};
