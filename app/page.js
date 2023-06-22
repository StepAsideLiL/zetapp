import HomeBanner from "./components/Home/HomeBanner";
import ProductsOnZet from "./components/Home/ProductsOnZet";
import TheZetEffect from "./components/Home/TheZetEffect";
import TopBrands from "./components/Home/TopBrands";
import WhyChooseUs from "./components/Home/WhyChooseUs";

export default function Home() {
  return (
    <main className="">
      <HomeBanner />

      <TopBrands />

      <ProductsOnZet />

      {/* <TheZetEffect /> */}

      <WhyChooseUs />
    </main>
  );
}
