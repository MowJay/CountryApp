import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import ThemeProvider from "./themeProvider";
import Header from "@/components/header";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

export const metadata = {
  title: "Country App",
  description: "Where in the world?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className}`}>
        <ThemeProvider>
          <Header />
          <main className="max-w-screen-xl mx-auto px-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
