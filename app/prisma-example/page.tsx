import prisma from '@/utils/db';

const prismaHandler = async () => {
  console.log('When prisma-example page runs!');
  // ** This runs on build so everytime our app build, it will generate new task that's why we are commenting out.
  // await prisma.task.create({
  //   data: {
  //     content: 'Wake Up!',
  //   },
  // });

  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return tasks;
};

const PrismaExamplePage = async () => {
  const tasks = await prismaHandler();

  if (tasks.length < 1) {
    return (
      <h2 className='text-2xl font-medium mt-8'>
        There is no task to display...
      </h2>
    );
  }

  return (
    <main>
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>{task.content}</li>;
        })}
      </ul>
    </main>
  );
};

export default PrismaExamplePage;
