import Image from "next/image";
import Link from "next/link";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-2 justify-center md:justify-start">
        <Image src="/logo.svg" alt="logo" width={30} height={30} />
        <p className={`text-lg font-semibold ${className} hidden md:block`}>MdShop</p>
      </div>
    </Link>
  );
};
