import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";
import "./globals.scss";
import Head from "next/head";
import BootstrapClient from "./components/BootstrapClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maven",
  description: "Find Your Maven, Find Your Match: Unveil Love's Potential",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script></script>
      </Head>
      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
