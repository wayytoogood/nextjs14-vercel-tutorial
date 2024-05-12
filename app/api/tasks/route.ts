import db from '@/utils/db';
import { Task } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

// Here res argument only have {params: type}so I'm not sure it's actual type.
export const GET = async (req: Request, res: Response) => {
  const tasks = await db.task.findMany({ orderBy: { createdAt: 'desc' } });
  // The Response interface of the Fetch API represents the response to a request.
  return Response.json({ data: tasks });
  // This gives error if we use "GET" function(or any of the request methods), so we need to use send NextResponse to achieve the same thing.
  // return res.json({ data: tasks });
  // return NextResponse.json({ data: tasks }, { status: 200 });
};

export const POST = async (req: Request) => {
  const data = (await req.json()) as { content: string };
  const task = await db.task.create({ data: { content: data.content } });

  // NextResponse is a wrapper around Response object which is the same when it comes to the json method, so we could use normal "Response" object here.
  return NextResponse.json({ data: task }, { status: 200 });
};

// Below is the pages/api(the older) version, won't work here.
// type ResponseData = {
//   data: Task[];
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   const tasks = await db.task.findMany({ orderBy: { createdAt: 'desc' } });

//   res.status(200).json({ data: tasks });
// }
