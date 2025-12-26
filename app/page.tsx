import {
  ForceLightOnce,
  Header,
  Hero,
  FeaturesUseCases,
  HowItWorks,
  ProductShots,
  Demo,
  TestimonialsPayments,
  Pricing,
  FAQSecurity,
  Footer,
} from "@/components/landing";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <ForceLightOnce />
      <Header />
      <main>
        <Hero />
        <ProductShots />
        <FeaturesUseCases />
        <HowItWorks />
        <Demo />
        <TestimonialsPayments />
        <Pricing />
        <FAQSecurity />
      </main>
      <Footer />
    </div>
  );
}
