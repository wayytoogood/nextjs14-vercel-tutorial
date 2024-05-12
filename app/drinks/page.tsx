// It makes the request on the server so browsers of users not the one who makes the request, therefore it would be probably faster than client request.
// Also we can make some database connections in the component since it's actually generated in the server.
// We can make this component async, only because it's run on the server, this is not possible with traditional react components.

import DrinksList from '@/components/DrinksList';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const fetchDrinks = async () => {
  // Added for making the request show bit longer.
  await new Promise((res) => setTimeout(res, 1000));

  const res = await fetch(url);

  // Since try and catch only will trigger on problems related with networks,
  // it's safer to throw errors like this.
  if (!res.ok) {
    throw new Error('There was an error while fetching the drinks');
  }

  const data = await res.json();
  return data;
};

const DrinksPage = async () => {
  const data = await fetchDrinks();

  return <DrinksList drinks={data.drinks} />;
};

export default DrinksPage;
