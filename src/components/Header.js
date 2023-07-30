import Link from "next/link";
import { useSession, signOut } from "next-auth/react"

const Header = () => {

  const {data: session} = useSession();

  return (
    <div className="border-b">
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
          <button className="btn btn-active btn-neutral  bg-gradient-to-r from-cyan-500 to-blue-500 border-none text-white">
            <Link href={'/builder'}>Build PC</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
