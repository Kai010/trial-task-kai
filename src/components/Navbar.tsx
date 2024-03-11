
import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';
import { UserAccountNav } from './UserAccountNav';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {Bolt} from 'lucide-react';
import { ThemeSwitcherButton } from './theme-switch';
const Navbar = async() => {

  const session = await getServerSession(authOptions);


  return (
    <div className='py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0'>
      <nav className='flex justify-between px-10'>
      <div className='flex items-center gap-4'>
      <Link href='/'>
          <Bolt />
        </Link>
        {session?.user ? (
        <div className='flex pl-4 gap-4'>
        <Link className={buttonVariants()} href='/swap'>
          Swap
        </Link>
        <Link className={buttonVariants()} href='/explore'>
          Explore
        </Link> 
        </div>) : <div></div> }
        </div>
        <div className='flex items-center gap-4' >
        <ThemeSwitcherButton />
        {session?.user ? (<UserAccountNav />) : (
        <Link className={buttonVariants()} href='/sign-in'>
          Sign in
        </Link>
        )}
        <ConnectButton chainStatus="icon" showBalance={false}/>
      </div>
      </nav>
    </div>
  );
};

export default Navbar;