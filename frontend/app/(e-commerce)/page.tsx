import { Suspense } from "react";
import { Banner } from "./_components/banner";
import { Category } from "./_components/category";
import { Rekomendasi } from "./_components/rekomendasi";

export default function Home() {
  return (
    <section>
      <Banner />
      <Category />
      <Suspense fallback={<div>Loading...</div>}>
        <Rekomendasi />
      </Suspense>
    </section>
  );
}
