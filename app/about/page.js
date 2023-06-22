import GotFeatured from "../components/About/GotFeatured";
import HowWeEvolved from "../components/About/HowWeEvolved";
import MeetTheInvestors from "../components/About/MeetTheInvestors";
import OurMission from "../components/About/OurMission";
import MoreInvestor from "../components/About/MoreInvestor";
import MeetOutFounders from "../components/About/MeetOutFounders";
import OurOfficeView from "../components/About/OurOfficeView";

export default function About() {
  return (
    <main className="">
      <OurMission />

      <HowWeEvolved />

      <GotFeatured />

      <MeetTheInvestors />

      <MoreInvestor />

      <MeetOutFounders />

      <OurOfficeView />
    </main>
  );
}
