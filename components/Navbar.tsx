import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link
        href="/"
        className="flex items-center gap-1"
      >
        <Image
          src="/icons/logo.svg"
          alt="logo"
          height={32}
          width={32}
          className="mx-1 max-sm:size-10"
        />
        <p className="text-white font-extrabold text-[26px] max-sm:hidden">
          MeetWave
        </p>
      </Link>

      <div className="flex flex-between gap-5">
        
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <SignInButton />
        </SignedOut>

        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar;