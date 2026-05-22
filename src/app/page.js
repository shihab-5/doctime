import HeroBanner from "./components/Banner";
import LiveClinicMetrics from "./components/LiveClinicMetrics";
import SavingsCalculator from "./components/SavingsCalculator";
import TalkTimeGuarantee from "./components/TalkTimeBenefits";
import TalkTimeBenefits from "./components/TalkTimeBenefits";
import TopDoc from "./components/TopDoc";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
<HeroBanner></HeroBanner>
<TopDoc></TopDoc>
<TalkTimeGuarantee></TalkTimeGuarantee>
<LiveClinicMetrics></LiveClinicMetrics>
    </div>
  );
}

