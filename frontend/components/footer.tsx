import { Separator } from "@/components/ui/separator";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <footer className="h-24  bg-white relative">
      <Separator className="absolute top-0 left-0 bg-orange-700 h-1" />
      <div className="container h-full">
        <div className="h-full flex  items-center justify-between text-neutral-800/60">
          <Logo />
          <p>&copy; {new Date().getFullYear()} MdShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
