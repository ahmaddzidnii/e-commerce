import { Navbar } from "@/components/navbar";

const EcommerceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="pt-24">{children}</main>
    </>
  );
};

export default EcommerceLayout;
