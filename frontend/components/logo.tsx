import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-2">
        <Image src="/logo.svg" alt="logo" width={30} height={30} />
        <p className="text-lg text-purple-100 font-bold hidden md:block">MdShop</p>
      </div>
    </Link>
  );
};
