import WebLayout from "@/components/layouts/WebLayout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Careers - JGFunded</title>

        <meta
          name="description"
          content="A marketplace where vetted and verified StartUps and Investors meet, and funding is initiated."
        />
      </Head>
      <WebLayout>
        <div className="min-h-[60vh] py-20 container px-6 xl:px-0 flex items-center justify-center">
           <span className="p-6 rounded-lg border border-gray-200">
           <h1 className="font-bold text-xl lg:text-3xl">There’s no job for now!</h1>
           </span>
        </div>
      </WebLayout>
    </>
  );
}
