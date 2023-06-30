import "@/styles/globals.css";
import { DM_Sans } from "next/font/google";
import { updateTheme } from "../components/Theme";
import Script from "next/script";

if (typeof window !== "undefined") updateTheme();
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-7EMKTRW285"
      ></Script>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7EMKTRW285', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <style jsx global>{`
        html {
          font-family: ${dmSans.style.fontFamily};
          scroll-behavior: smooth;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
