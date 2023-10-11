import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";

import Nav from "./components/Nav";

export default function App() {
  return (
    <main className="relative">
      {/* Start Navbar */}
      <Nav />
      {/* End Navbar */}
      {/* --------------------- */}
      {/* Start Hero */}
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      {/* End Hero */}
      {/* --------------------- */}
      {/* Start PopularProducts */}
      <section className="padding">
        <PopularProducts />
      </section>
      {/* End PopularProducts */}
      {/* ----------------- */}
      {/* Start SuperQuality */}
      <section className="padding">
        <SuperQuality />
      </section>
      {/* End SuperQuality */}
      {/* -------------------- */}
      {/* Start Services */}
      <section className="padding-x">
        <Services />
      </section>
      {/* End Services */}
      {/* ---------------------- */}
      {/* Start SpeciaOffer */}
      <section className="padding">
        <SpecialOffer />
      </section>
      {/* End SpeciaOffer */}
      {/* ---------------------- */}
      {/* Start CustomerReviews */}
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      {/* End CustomerReviews */}
      {/* ---------------------- */}
      {/* Start Subscribe */}
      <section className="padding-x sm:py-32 py-16 w-full ">
        <Subscribe />
      </section>
      {/* End Subscribe */}
      {/* ---------------------- */}
      {/* Start Footer */}
      <section className="bg-black padding-x padding-t pb-8 text-white">
        <Footer />
      </section>
      {/* End Footer */}
    </main>
  );
}
