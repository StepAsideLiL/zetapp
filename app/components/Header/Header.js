import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo/zetapp.png";

const Header = () => {
  return (
    <header className="border-b-[1px] border-[#d0d7e0]">
      <div className="container flex items-center justify-between max-w-5xl py-5 mx-auto">
        <div>
          <Image src={logo} alt="Site Logo" className="w-20" />
        </div>

        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/about">About Us</Link>
            </li>

            <li>
              <Link href="/partner-with-us">Partner With Us</Link>
            </li>

            <li>
              <Link href="/blog">Blog</Link>
            </li>

            <li>
              <Link
                href="/blog"
                className="bg-[#2075f0] text-white p-2 rounded-lg"
              >
                Download ZET
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
