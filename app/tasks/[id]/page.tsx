import { EditForm } from '@/components/EditForm';
import { getSingleTask } from '@/utils/actions';
import Link from 'next/link';

const TaskDetailPage = async ({ params }: { params: { id: string } }) => {
  const task = await getSingleTask(params.id);

  return (
    <div className='max-w-screen-sm'>
      <div className='mb-16'>
        <Link href='/tasks' className='btn btn-accent'>
          Go back to tasks
        </Link>
      </div>
      <EditForm task={task} />
    </div>
  );
};

export default TaskDetailPage;
