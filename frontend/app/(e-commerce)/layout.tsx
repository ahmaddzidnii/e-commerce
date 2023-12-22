import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const EcommerceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="py-32 bg-neutral-100">
        <section className="container">{children}</section>
      </main>
      <Footer />
    </>
  );
};

export default EcommerceLayout;
