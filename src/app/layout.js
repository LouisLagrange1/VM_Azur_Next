import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Layout/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VM Azure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
