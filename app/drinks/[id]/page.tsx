// export const dynamicParams = true,
//   revalidate = false,
//   dynamic = 'auto';

import { PageProps } from '@/.next/types/app/page';
import { Drink } from '@/components/DrinksList';
import Link from 'next/link';
import Image from 'next/image';
// Nextjs will provide {src, width, height, ...} object for imported images.
import staticImg from '/public/drink.webp';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const fetchDrink = async (id: string) => {
  const res = await fetch(`${url}${id}`);

  if (!res.ok) {
    throw new Error('Something happened when fetching the drink!');
  }

  const data = await res.json();

  return data.drinks[0];
};

const SingleDrinkPage = async (props: PageProps) => {
  const { params } = props;

  const drink = (await fetchDrink(params.id)) as Drink;
  const { idDrink, strDrink, strInstructions, strDrinkThumb } = drink;

  return (
    <div>
      <Link href='/drinks' className='btn btn-primary mt-8 mb-12'>
        Back to the drinks
      </Link>

      {/* Static with normal image tag usage */}
      {/* <img src={staticImg.src} alt='drink' /> */}

      {/* Static with nextjs image component usage, nextjs will do most of the work we only need to use width and height for basic usage. */}
      {/* We can still use width and height properties for rendering the correct size image. */}
      {/* <Image
        src={staticImg}
        alt='drink'
        className='w-48 h-48'
      /> */}

      {/* For remote images we need to define width and height for nextjs to know aspect ratio and prepare image srcsets for it,
          if we don't give with and height with css these values would be image's width and height. And also we need to add remote image url in next.config.js */}
      <Image
        src={strDrinkThumb}
        alt={strDrink}
        width={300}
        height={300}
        className='rounded shadow-lg'
      />
      <h1 className='text-4xl mt-4'>{strDrink}</h1>
    </div>
  );
};

export default SingleDrinkPage;
