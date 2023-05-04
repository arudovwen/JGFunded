import WebLayout from "@/components/layouts/WebLayout";
import Head from "next/head";

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
        <div className="h-screen"></div>
      </WebLayout>
    </>
  );
}

export default About;
