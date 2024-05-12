import prisma from '@/utils/db';
import { Route } from 'next';
import Link from 'next/link';
import DeleteForm from './DeleteForm';
import { getAllTasks } from '@/utils/actions';

const TaskList = async () => {
  const tasks = await getAllTasks();

  if (tasks.length === 0) {
    return (
      <h2 className='text-2xl font-medium mt-8'>
        There is no task to display...
      </h2>
    );
  }

  return (
    <div>
      <ul className='grid gap-4 mt-8'>
        {tasks.map((task) => {
          const { id, content, completed } = task;

          return (
            <li
              key={id}
              className='flex justify-between items-center px-6 py-4 border border-base-300 rounded-lg shadow-lg'
            >
              <h2
                className={`text-lg capitalize ${
                  completed ? 'line-through' : ''
                }`}
              >
                {content}
              </h2>
              <div className='flex gap-6 items-center'>
                <Link
                  href={`/tasks/${id}` as Route}
                  className='btn btn-accent btn-xs'
                >
                  EDIT
                </Link>
                <DeleteForm id={id} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
