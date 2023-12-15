import { Banner } from "./_components/banner";
import { Category } from "./_components/category";
import { Rekomendasi } from "./_components/rekomendasi";

export default function Home() {
  return (
    <section>
      <div className="container">
        <Banner />
        <Category />
        <Rekomendasi />
      </div>
    </section>
  );
}
