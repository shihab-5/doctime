import HeroBanner from "./components/Banner";
import HowItWorks from "./components/HowItWorks";
import TopDoc from "./components/TopDoc";
import WhyChooseUs from "./components/whyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
<HeroBanner></HeroBanner>
<TopDoc></TopDoc>
<WhyChooseUs></WhyChooseUs>
<HowItWorks></HowItWorks>
    </div>
  );
}

