import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header className="sticky top-0 z-50">
      {/* top nav bar */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow curosr-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        <div className="text-white flex items-center space-x-6 text-xs ml-2 whitespace-">
          <div
            onClick={!session ? signIn : signOut}
            className="cursor-pointer hover:underline"
          >
            <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div
            onClick={() => session && router.push("/orders")}
            className="cursor-pointer hover:underline"
          >
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="relative flex items-center cursor-pointer hover:underline"
          >
            <span className="text-black absolute top-0 right-0 md:right-10 h-4 w-4 rounded-full bg-yellow-400 text-center">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm">Basket</p>
          </div>
        </div>
      </div>

      {/* botttom nav bar */}
      <div className="space-x-3 p-2 pl-6 flex items-center bg-amazon_blue-light text-white">
        <p className="flex cursor-pointer hover:underline items-center">
          <MenuIcon className="h-4" />
          All
        </p>
        <p className="cursor-pointer hover:underline ml-2">Prime Video</p>
        <p className="cursor-pointer hover:underline">Amazon Business</p>
        <p className="cursor-pointer hover:underline">Today's Deals</p>
        <p className="cursor-pointer hover:underline hidden lg:inline-flex">
          Electronics
        </p>
        <p className="cursor-pointer hover:underline hidden lg:inline-flex">
          Food & Grocery
        </p>
        <p className="cursor-pointer hover:underline hidden lg:inline-flex">
          Prime
        </p>
        <p className="cursor-pointer hover:underline hidden lg:inline-flex">
          Shopper Toolkit
        </p>
        <p className="cursor-pointer hover:underline hidden lg:inline-flex">
          Health & Personal Care
        </p>
      </div>
    </header>
  );
}

export default Header;
