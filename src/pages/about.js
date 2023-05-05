import WebLayout from "@/components/layouts/WebLayout";
import Head from "next/head";
import First from "@/components/about/First";
import Second from "@/components/about/Second";
import Third from "@/components/about/Third";
import Fourth from "@/components/about/Fourth";
import Fifth from "@/components/about/Fifth";

function About() {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="A marketplace where vetted and verified StartUps and Investors meet, and funding is initiated."
        />
      </Head>
      <WebLayout>
        <div className="pt-20 bg-white dark:bg-black">
          <div className="px-6">
            <First />
            <Second />
            <Third />
            <Fourth />
          </div>

          <Fifth />
        </div>
      </WebLayout>
    </>
  );
}

export default About;
