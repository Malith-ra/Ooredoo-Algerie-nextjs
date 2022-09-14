import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/">
      <span className="inline-flex items-center justify-center h-20 w-full cursor-pointer">
        <Image
          className="rounded-lg"
          src="/Ooredoo_logo.svg"
          alt="logo"
          width="200"
          height="200"
        />
      </span>
    </Link>
  );
};

export default Logo;
