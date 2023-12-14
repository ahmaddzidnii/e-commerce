import { Navbar } from "@/components/navbar";

const EcommerceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="py-32">{children}</main>
    </>
  );
};

export default EcommerceLayout;
