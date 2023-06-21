import HomeBanner from "./components/Home/HomeBanner";
import ProductsOnZet from "./components/Home/ProductsOnZet";
import TopBrands from "./components/Home/TopBrands";

export default function Home() {
  return (
    <main className="">
      <HomeBanner />

      <TopBrands />

      <ProductsOnZet />
    </main>
  );
}
