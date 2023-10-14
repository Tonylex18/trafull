import Hero from "./components/Hero/Hero";
import Works from "./components/Works/Works";
import Plan from "./components/Plan/Plan";
import Value from "./components/Value/Value";
import Faq from "./components/faq/Faq";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Works />
      <Plan />
      <Value />
      <Faq />
    </main>
  );
}
