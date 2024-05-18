import prisma from '@/utils/db';

// const prismaHandler = async () => {
//   await prisma.task.create({
//     data: {
//       content: 'Wake Up!',
//     },
//   });

//   const tasks = await prisma.task.findMany({
//     orderBy: {
//       createdAt: 'desc',
//     },
//   });

//   return tasks;
// };

const PrismaExamplePage = async () => {
  // Every time components rendered, new task will create.
  // const tasks = await prismaHandler();

  return (
    <main>
      {/* <ul>
        {tasks.map((task) => {
          return <li key={task.id}>{task.content}</li>;
        })}
      </ul> */}
    </main>
  );
};

export default PrismaExamplePage;
