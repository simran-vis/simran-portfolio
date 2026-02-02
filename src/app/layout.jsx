import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "simran vishwakarma - Front End Developer",
    template: "%s | simran vishwakarma - Front End Developer",
  },
  description:
    "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable applications and beautiful user experiences.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Web Development",
  ],
  authors: [{ name: "simran vishwakarma" }],
  creator: "simran vishwakarmat",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://simran-vishwakarma.vercel.app/",
    title: "simran vishwakarma - Front End Developer",
    description:
      "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    siteName: "simran vishwakarma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "simran vishwakarma - Front End Developer",
    description:
      "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    creator: "@simran",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "b1a61aee86074d59a23b3d051cdf2d3d"}'
        ></script>
      </body>
    </html>
  );
}
