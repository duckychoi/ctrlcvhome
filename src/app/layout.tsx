import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ctrl+CV Lab | Control & Computer Vision Lab - Seoultech",
  description: "Control & Computer Vision Laboratory at Seoul National University of Science & Technology. Researching Robust Physical AI, Robot Vision, Reinforcement Learning, and Autonomous Systems.",
  keywords: "control systems, computer vision, robotics, AI, reinforcement learning, autonomous robots, Seoultech, CV lab",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased softrealism-bg text-neutral-800">
        {children}
      </body>
    </html>
  );
}
