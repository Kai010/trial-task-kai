import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";


const page = async() => {

  const session = await getServerSession(authOptions);
  return (
    <div>
    {session?.user ? (<div className="text-3xl">Explore</div>) : (
      <div className="flex items-center gap-4">
      <div className="text-3xl"> Please Sign In first </div>
      <Link className={buttonVariants()} href='/sign-in'>
        Sign in
      </Link>
      </div>
      )}
      </div>
  ); 
};

export default page;