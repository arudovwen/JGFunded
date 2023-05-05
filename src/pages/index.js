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
        <div className="min-h-screen container"></div>
      </WebLayout>
    </>
  );
}
