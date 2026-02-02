export function generateMetadata({
  title = "simran vishwakrama - Front End Developer",
  description = "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  url = "https://simran-vishwakarma.vercel.app/",
}) {
  return {
    title,
    description,
    keywords:
      "Full Stack Developer, React, Next.js, Node.js, JavaScript, Web Development, simran vishwakarma",
    authors: [{ name: "simran vishwakarma " }],
    creator: "simran vishwakarma",
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title,
      description,
      siteName: "simran vishwakarma Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
    metadataBase: new URL("https://simran-vishwakarma.vercel.app/"),
  };
}
