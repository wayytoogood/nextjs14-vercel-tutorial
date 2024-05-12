// we can use this functions even in client components since it's using 'use server' directive in a differen file.
'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import prisma from './db';

export const getAllTasks = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return tasks;
};

export const getSingleTask = async (id: string) => {
  const task = await prisma.task.findUnique({
    where: { id },
  });

  return task;
};

export const generateTask = async (formData: FormData) => {
  const content = formData.get('content') as string;

  await prisma.task
    .create({ data: { content } })
    .then(() => {
      console.log('Task is successfully generated');
    })
    .catch((e) => console.log(`There was a error: ${e}`));
  // **Since it's going to be static(component), we need to revalidate the page in order to show the new generated task.
  revalidatePath('/tasks');
};

export const generateTaskCustom = async (
  prevState: { message: string | null },
  formData: FormData
): Promise<{ message: string | null }> => {
  await new Promise((res) => setTimeout(res, 2000));
  const content = formData.get('content') as string;

  // We are generating our schema as object.
  const Task = z.object({
    content: z.string().min(5),
  });

  try {
    // Given any Zod schema, you can call its .parse method to check data is valid. If it is, a value is returned with full type information! Otherwise, an error is thrown.
    Task.parse({ content });

    await prisma.task.create({ data: { content } });
    revalidatePath('/tasks');

    // return value will be the new state value.
    return { message: 'success' };
  } catch (error) {
    return { message: 'error' };
  }
};

export const deleteTask = async (
  prevState: { message: string },
  formData: FormData
) => {
  await new Promise((res) => setTimeout(res, 2000));
  const id = formData.get('id') as string;

  try {
    await prisma.task.delete({ where: { id } });
    // when we add revalidatePath here it revalidates but probably due to reason that state is lost we can't update the form state.
    // so I believe we need to add router.refresh() to the client side component in this case since revalidatePath only works on server side(Example on DeleteForm).
    return { message: 'success' };
  } catch (error) {
    console.log(error);
    return { message: 'error' };
  }
};

export const editTask = async (formData: FormData) => {
  const id = formData.get('id') as string;
  const content = formData.get('content') as string;
  const completed = formData.get('completed') as 'on' | null;

  await prisma.task
    .update({
      where: { id },
      data: { content, completed: completed === 'on' ? true : false },
    })
    .then(() => {
      console.log('Task is succesfully updated');
    })
    .catch((e) => console.log(`There was a error: ${e}`));

  // With redirect as far as I understand we don't need to revalidate.
  // revalidatePath('/tasks');
  // If we place redirect in a try catch block it will throw an error, so we need to place it outside of the block.
  redirect('/tasks');
};
