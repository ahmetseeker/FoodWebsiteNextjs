import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {

  const user = false;

  return (
    <div className="h-12 text-red-500 flex justify-between items-center border-b-2 border-b-red-500 p-4 uppercase md:h-24 lg:px-20 xl:px-40">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>

      <div className="text-xl md:font-bold flex-1 text-center">
        <Link href="/">Massimo</Link>
      </div>

      <div className="md:hidden">
        <Menu />
      </div>

      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="bg-orange-300 flex items-center gap-2 cursor-pointer rounded-md px-1 md:absolute lg:static right-2 top-3">
          <Image src="/phone.png" alt="" width={20} height={20}/>
          <span>123 456 78</span>
        </div>
        {user ? (
          <Link href="/orders">Orders</Link>
        ) : (
          <Link href="/login">Login</Link>
        )}
        <CartIcon/>
      </div>
    </div>
  );
};

export default Navbar;
