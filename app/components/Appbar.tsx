"use client";
import { signIn, signOut, useSession } from "next-auth/react";
// import Image from "next/image";
import Link from "next/link";

export function Appbar() {
  const session = useSession();
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <Music2Icon className="h-6 w-6 text-[#5df7f7] hover:text-[#26c1c1] transition-all hover:h-7 hover:w-7" />
        <span className="ml-2 text-[23px] font-extrabold text-[#5df7f7] hover:text-[#26c1c1]  transition-all hover:text-[25px]">
          Chordify
        </span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {session.data?.user && (
          <button
            className="text-lg font-medium hover:underline hover:text-[#f63f5adf] underline-offset-4 text-[#b5b6b7] hover:text-[20px] transition-all"
            onClick={() => signOut()}
          >
            Logout
          </button>
        )}
        {!session.data?.user && (
          <button
            className="text-lg font-medium hover:underline hover:text-[#5df7f7] underline-offset-4 text-[#b5b6b7] hover:text-[20px] transition-all "
            onClick={() => signIn()}
          >
            SignIn
          </button>
        )}
      </nav>
    </header>
  );
}
function Music2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="18" r="4" />
      <path d="M12 18V2l7 4" />
    </svg>
  );
}

// <div className="flex justify-between">
//   {/* Left */}
//   <div>Chordify</div>
//   {/* Right  */}
//   <div>
//     {session.data?.user && (
//       <button className="m-2 p-2 bg-blue-400" onClick={() => signOut()}>
//         Logout
//       </button>
//     )}
//     {!session.data?.user && (
//       <button className="m-2 p-2 bg-blue-400" onClick={() => signIn()}>
//         SignIn
//       </button>
//     )}
//   </div>
// </div>
