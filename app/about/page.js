import GotFeatured from "../components/About/GotFeatured";
import HowWeEvolved from "../components/About/HowWeEvolved";
import MeetTheInvestors from "../components/About/MeetTheInvestors";
import OurMission from "../components/About/OurMission";
import MoreInvestor from "../components/About/MoreInvestor";

export default function About() {
  return (
    <main className="">
      <OurMission />

      <HowWeEvolved />

      <GotFeatured />

      <MeetTheInvestors />

      <MoreInvestor />
    </main>
  );
}
