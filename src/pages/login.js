import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";
import googleLogo from "../assets/google.png";
import { useSession, signIn, signOut } from "next-auth/react"

const SignIn = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <div className="flex justify-center">

          <div className="p-10 rounded-lg shadow-md bg-slate-50 w-[500px]">
            <h3 className="text-center font-semibold text-3xl mb-4">Log In</h3>
            
            <Image onClick={() => signIn('google', { callbackUrl:"http://localhost:3000" })} className="mx-auto cursor-pointer" width={100} src={googleLogo}></Image>

            <h5 className="text-center font-bold mt-5 text-lg">-----  OR  -----</h5>
            <form className="mt-7 mb-10">
              <div className="flex flex-col">
                <label className="mb-2" htmlFor="email">Email</label>
                <input className="p-2 rounded-lg border border-blue-900" type="email" name="email" id=""  placeholder="Your Email"/>
              </div>
              <div className="flex flex-col mt-4">
                <label className="mb-2" htmlFor="password">Password</label>
                <input className="border border-blue-900 p-2 rounded-lg" type="password" name="email" id="" placeholder="Your password" />
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignIn;

SignIn.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
