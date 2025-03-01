import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

// import { syncUser } from "@/actions/user.action";

async function Navbar() {
  const user = await currentUser();
//   if (user) await syncUser(); // POST

  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold bg-gradient-to-tl from-neutral-900 via-slate-200 to-white bg-clip-text text-transparent tracking-wider">
              Vircle
            </Link>
          </div>

          <DesktopNavbar/>
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;