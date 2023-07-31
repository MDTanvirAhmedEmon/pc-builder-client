import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="border-b">
      <div className="container mx-auto flex items-center justify-between py-2 px-2 md:px-2">
        <div className="grid grid-cols-2 items-center">
        <Link href={'/'} className="text-xl">PC Builder</Link>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href={"/components"}>Components</Link>
              </li>
              {session?.user ? (
                <li>
                  <Link onClick={() => signOut()} href={""}>
                    Log Out
                  </Link>
                </li>
              ) : (
                <li>
                  <Link href={"/login"}>Log In</Link>
                </li>
              )}
              <li>
                <Link
                  className=" w-24 ml-2 my-2  bg-gradient-to-r from-cyan-500 to-blue-500 border-none text-white"
                  href={"/builder"}
                >
                  Build PC
                </Link>
              </li>
              <li>
                <details>
                  <summary>Category</summary>
                  <ul className="p-2 bg-base-100 z-50">
                    <li>
                      <Link href={"/category/Processor"}>Processor</Link>
                    </li>
                    <li>
                      <Link href={"/category/Motherboard"}>Motherboard</Link>
                    </li>
                    <li>
                      <Link href={"/category/Ram"}>Ram</Link>
                    </li>
                    <li>
                      <Link href={"/category/Power Supply"}>Power Supply</Link>
                    </li>
                    <li>
                      <Link href={"/category/Storage Device"}>
                        Storage Device
                      </Link>
                    </li>
                    <li>
                      <Link href={"/category/Monitor"}>Monitor</Link>
                    </li>
                    <li>
                      <Link href={"/category/Others"}>Others</Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>

        </div>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/components"}>Components</Link>
            </li>
            {session?.user ? (
              <li>
                <Link onClick={() => signOut()} href={""}>
                  Log Out
                </Link>
              </li>
            ) : (
              <li>
                <Link href={"/login"}>Log In</Link>
              </li>
            )}
            <li>
              <details>
                <summary>Category</summary>
                <ul className="p-2 bg-base-100 z-50">
                  <li>
                    <Link href={"/category/Processor"}>Processor</Link>
                  </li>
                  <li>
                    <Link href={"/category/Motherboard"}>Motherboard</Link>
                  </li>
                  <li>
                    <Link href={"/category/Ram"}>Ram</Link>
                  </li>
                  <li>
                    <Link href={"/category/Power Supply"}>Power Supply</Link>
                  </li>
                  <li>
                    <Link href={"/category/Storage Device"}>
                      Storage Device
                    </Link>
                  </li>
                  <li>
                    <Link href={"/category/Monitor"}>Monitor</Link>
                  </li>
                  <li>
                    <Link href={"/category/Others"}>Others</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
          <Link className="btn btn-active btn-neutral  bg-gradient-to-r from-cyan-500 to-blue-500 border-none text-white" href={'/builder'}>Build PC</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

{
  /* 

<div className="navbar container mx-auto ">
<div className="flex-1 items-center">
  <Link href={"/"} className="font-bold text-2xl">
    PC Builder
  </Link>
</div>
<div className="flex-none">
  <ul className="menu menu-horizontal px-1">
    <li>
      <Link href={'/components'}>Components</Link>
    </li>
    {
      session?.user ? 
      <li>
      <Link onClick={() => signOut()} href={''}>Log Out</Link>
    </li>
        :
     <li>
     <Link href={'/login'}>Log In</Link>
   </li>
    }
    <li>
      <details>
        <summary>Category</summary>
        <ul className="p-2 bg-base-100 z-50">
          <li>
            <Link href={"/category/Processor"}>Processor</Link>
          </li>
          <li>
            <Link href={"/category/Motherboard"}>Motherboard</Link>
          </li>
          <li>
            <Link href={"/category/Ram"}>Ram</Link>
          </li>
          <li>
            <Link href={"/category/Power Supply"}>Power Supply</Link>
          </li>
          <li>
            <Link href={"/category/Storage Device"}>
              Storage Device
            </Link>
          </li>
          <li>
            <Link href={"/category/Monitor"}>Monitor</Link>
          </li>
          <li>
            <Link href={"/category/Others"}>Others</Link>
          </li>
        </ul>
      </details>
    </li>
  </ul>

    <Link className="btn btn-active btn-neutral  bg-gradient-to-r from-cyan-500 to-blue-500 border-none text-white" href={'/builder'}>Build PC</Link>

</div>
</div> */
}
