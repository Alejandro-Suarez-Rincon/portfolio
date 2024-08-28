"use client";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { metadata } from "./metadata";
import { Nav } from "@/modules/components/nav";
import { store } from "@/store/store";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const title =
    typeof metadata.title === "string" ? metadata.title : "Default Title";
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
      </head>
      <body className={inter.className}>
        <Provider store={store}>
          <Nav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
