import localFont from "next/font/local";
import "./globals.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const RecoletaAlt = localFont({
  src: [
    {
      path: "fonts/RecoletaAlt-Thin.woff",
      weight: "100",
    },
    {
      path: "fonts/RecoletaAlt-Light.woff",
      weight: "300",
    },
    {
      path: "fonts/RecoletaAlt-Regular.woff",
      weight: "400",
    },
    {
      path: "fonts/RecoletaAlt-Medium.woff",
      weight: "500",
    },
    {
      path: "fonts/RecoletaAlt-SemiBold.woff",
      weight: "600",
    },
    {
      path: "fonts/RecoletaAlt-Bold.woff",
      weight: "700",
    },
    {
      path: "fonts/RecoletaAlt-Black.woff",
      weight: "900",
    }
  ],

  variable: "--font-recoleta-alt",
  weight: "100 900",
});

export const metadata = {
  title: "PinkLaura's portfolio",
  description: "Discover more about my projects and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${RecoletaAlt.variable} font-sans`}>
      <body >
        <div className="overflow-hidden">

        

        < Navbar />


        {children}


        < Footer />
        </div>
      </body>

    </html>
  );
}
