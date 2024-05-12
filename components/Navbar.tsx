import { Route } from 'next';
import Link from 'next/link';

const links: { href: Route<string>; label: string }[] = [
  { href: '/client', label: 'client' },
  { href: '/drinks', label: 'drinks' },
  { href: '/prisma-example', label: 'prisma' },
  { href: '/tasks', label: 'tasks' },
];

const Navbar = () => {
  return (
    <nav className='bg-base-300 p-4'>
      <div className='navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row'>
        <Link href='/' className='btn btn-primary'>
          Next.js
        </Link>
        <ul className='menu menu-horizontal md:ml-8'>
          {links.map(({ href, label }) => {
            return (
              <li key={href}>
                <Link href={href} className='capitalize'>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
