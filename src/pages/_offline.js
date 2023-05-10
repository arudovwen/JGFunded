import WebLayout from "@/components/layouts/WebLayout";
import Head from "next/head";

function Offline() {
  return (
    <>
      <Head>
        <title>You are offline</title>
        <meta
          name="description"
          content="A marketplace where vetted and verified StartUps and Investors meet, and funding is initiated."
        />
      </Head>
      <WebLayout>
        <div className="pt-20 bg-white dark:bg-black">
         You offline
         
        </div>
      </WebLayout>
    </>
  );
}

export default Offline;
