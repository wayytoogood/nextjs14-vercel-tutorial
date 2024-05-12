'use client';
// If we want to add some functionality for user or some function that browser api provides such as localStorage, we need to use client component.
// All the components defaults to server components, meaning they just generated on the server and their html and css send to the browser, unlike the
// server components, client components send also js to browser to make the component interactive, that's the reason why we only see the log on the browser
// when we define client components.
import { useState } from 'react';

const ClientPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className='text-7xl font-bold mb-4'>{count}</h1>
      <button className='btn btn-primary' onClick={() => setCount(count + 1)}>
        increase
      </button>
    </div>
  );
};

export default ClientPage;
