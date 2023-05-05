import "@/styles/globals.css";
import { DM_Sans } from "next/font/google";
import {updateTheme} from "../components/Theme";

if (typeof window !== "undefined")
updateTheme()
const dmSans = DM_Sans({ subsets: ["latin"],weight: ['400','500', '700'] });


export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${dmSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
