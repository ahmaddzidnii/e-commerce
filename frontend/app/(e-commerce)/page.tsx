import { Banner } from "./_components/banner";
import { Category } from "./_components/category";

export default function Home() {
  return (
    <section>
      <div className="container">
        <Banner />
        <Category />
      </div>
    </section>
  );
}
