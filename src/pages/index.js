import Banner from "@/components/landing/Banner";
import Board from "@/components/landing/Board";
import Join from "@/components/landing/Join";
import WeHelp from "@/components/landing/WeHelp";
import Benefits from "@/components/landing/Benefits";
import Pricing from "@/components/landing/Pricing";
import Features from "@/components/landing/Features";
import Faqs from "@/components/landing/Faqs";
import Waitlist from "@/components/landing/Waitlist";
import WebLayout from "@/components/layouts/WebLayout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - JGFunded</title>

        <meta
          name="description"
          content="A marketplace where vetted and verified StartUps and Investors meet, and funding is initiated."
        />
      </Head>
      <WebLayout>
        <div className="min-h-screen">
          <Banner />
          <Board />
          <Join />
          <WeHelp />
          <Features />
          <Benefits />
          {/* <Pricing /> */}
          <Faqs />
          <Waitlist />
        </div>
      </WebLayout>
    </>
  );
}
