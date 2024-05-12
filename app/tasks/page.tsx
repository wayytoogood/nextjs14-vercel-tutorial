import { TaskForm } from '@/components/TaskForm';
import { TaskFormCustom } from '@/components/TaskFormCustom';
import TaskList from '@/components/TaskList';

const TasksPage = async () => {
  return (
    <div className='max-w-screen-sm'>
      <TaskFormCustom />
      <TaskList />
    </div>
  );
};

export default TasksPage;
