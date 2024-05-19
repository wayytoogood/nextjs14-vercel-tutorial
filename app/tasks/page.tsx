// When we have this type of dynamic content which needs to change several instances, sometimes it doesn't revalidate the page
// event though we use revalidate function(this wasn't a propblem in my case, probably fixed), so for this kind of situations it's better to use
// "force-dynamic" which equals to "getServerSideProps",it defaults to "auto" which nextjs will decide which one should be used after look into the context,
// other options are "force-static" => static page regenation, "error" => "getStaticProps".
export const dynamic = 'force-dynamic';
import { TaskForm } from '@/components/TaskForm';
import { TaskFormCustom } from '@/components/TaskFormCustom';
import TaskList from '@/components/TaskList';

const TasksPage = async () => {
  console.log('We are on the Tasks Page!');
  return (
    <div className='max-w-screen-sm'>
      <TaskFormCustom />
      <TaskList />
    </div>
  );
};

export default TasksPage;
