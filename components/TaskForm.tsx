import { generateTask } from '@/utils/actions';
import prisma from '@/utils/db';
import { revalidatePath } from 'next/cache';

// ****Without server actions we would need to make a request to the api, with server action we can write server code(prisma.create...),
// in the component since it's same as server and safe.
// Nextjs provide form data to action function.
// const generateTask = async (formData: FormData) => {
//   'use server';
//   // Server action needs to be in the server component with 'use server' directive at the top like this, if we want to use server actions
//   // in a client component we need to make a new file for generateTask with 'use server' directive.

//   // It needs to match the name of the input.
//   const content = formData.get('content') as string;

//   await prisma.task
//     .create({ data: { content } })
//     .then(() => {
//       console.log('Task is successfully generated');
//     })
//     .catch((e) => console.log(`There was a error: ${e}`));

//   // **Since it's going to be static(component), we need to revalidate the page in order to show the new generated task.
//   revalidatePath('/tasks');
// };

export const TaskForm = () => {
  return (
    // There are several methods to use server actions but using in the action like this is really good since it can run without javascript.
    <form action={generateTask}>
      <div className='join w-full'>
        <input
          type='text'
          // Name is mandatory since we will access input's value by it in the function.
          name='content'
          className='join-item w-full input input-bordered'
          placeholder='Write here'
          required
        />
        <button type='submit' className='btn btn-primary join-item uppercase'>
          generate task
        </button>
      </div>
    </form>
  );
};
