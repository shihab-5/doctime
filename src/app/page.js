import HeroBanner from "./components/Banner";
import TopDoc from "./components/TopDoc";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
<HeroBanner></HeroBanner>
<TopDoc></TopDoc>
    </div>
  );
}

