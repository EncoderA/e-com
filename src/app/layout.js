import { Poppins } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/context/SidebarProvider";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "E-com SoftDef",
  description: "E-commerce Shop page",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body
        className={`${poppins.variable} font-snas antialiased`}
        suppressHydrationWarning>
        <SidebarProvider>
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
