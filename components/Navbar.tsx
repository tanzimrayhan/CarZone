import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px6 ">
            <Link  href="/" className="flex justify-center items-center">
                <Image src="/logo2.png" alt="Car Zone Logo" width={118} height={10} className='objec-contain -mt-1' />
            </Link>
            <CustomButton title="Sign In" btnType="button" containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]" handleClick={()=>alert('Sign In function is incomplete')}/>
            </nav>
    </header>
  )
}

export default Navbar