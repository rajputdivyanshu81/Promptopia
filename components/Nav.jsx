// components/Nav.js
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useUser, UserButton, SignInButton, SignedIn, SignedOut, signOut } from "@clerk/nextjs";

const Nav = () => {
  const { isSignedIn } = useUser();
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex-center flex gap-2">
        <Image
          src="/assets/images/logo.svg"
          alt="Promptopia Logo"
          width={30}
          height={20}
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      {/* Desktop Nav */}
      <div className="sm:flex hidden">
        {isSignedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <UserButton />
          </div>
        ) : (
          <SignInButton mode="modal">
            <button className="black_btn">Sign In</button>
          </SignInButton>
        )}
      </div>

      {/* Mobile Nav */}
      <div className="sm:hidden flex relative">
        {isSignedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              width={37}
              height={37}
              className="rounded-full"
              alt="Profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <SignInButton mode="modal">
            <button className="black_btn">Sign In</button>
          </SignInButton>
        )}
      </div>
    </nav>
  );
};

export default Nav;
