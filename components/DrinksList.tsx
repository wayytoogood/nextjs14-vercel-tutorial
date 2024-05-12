import Image from 'next/image';
import Link from 'next/link';

export interface Drink {
  idDrink: string;
  strDrink: string;
  strInstructions: string;
  strDrinkThumb: string;
}

const DrinksList = ({ drinks }: { drinks: Drink[] }) => {
  return (
    <ul className='grid sm:grid-cols-2 gap-6 mt-6'>
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link
            href={`/drinks/${drink.idDrink}`}
            className='text-xl font-medium'
          >
            {/* **Whenever we need to use Image with fill property, it's parent needs to be block and position relative since image will be position absolute. */}
            {/* **Responsive images especially usefull if the image with or height is changing according to screen size. */}
            {/* With responsive images we don't need to give width and height to image, aspect ratio will be determined by sizes property and presented image
            width and height(**both of them need to be certain, for example here if we dont give h-52, it won't show, width of div) will be determined by it's parent. */}
            <div className='relative h-52 mb-4'>
              <Image
                src={drink.strDrinkThumb}
                fill
                // **We can not use both width and fill properties so we need to uses sizes if we want to make the image optimize.
                // If we don't add sizes property it still cover the parent's area and it will still get sizes="100vw" as default.
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                alt={drink.strDrink}
                className='rounded-md object-cover'
              />
            </div>
            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DrinksList;
