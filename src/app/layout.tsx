import type { Metadata } from "next";
import "./globals.css";
import Header from "../shared-components/common/Header";



export const metadata: Metadata = {
  title: "Your App Title",
  description: "Your app description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
    
        {children}
      </body>
    </html>
  );
}