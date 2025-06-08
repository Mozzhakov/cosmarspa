import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CosMarSpa",
  description: "CosMarSpa Med Beauty",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
